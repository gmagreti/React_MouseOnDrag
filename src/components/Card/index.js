import React, { useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../../context/context';
import { Container, Label } from './styles';

function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      // Index do card que esta sendo arrastado
      const draggedIndex = item.index;
      // Para onde ele sera arrastado
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      // Faz o calculo do tamanho do elemento
      const targetSize = ref.current.getBoundingClientRect();
      // Calcula o ponto central do elemento
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      // Vai retornar o quanto esse card foi arrastado
      const draggedOffset = monitor.getClientOffset();
      // Recupera a distancia do card selecionado ate o topo
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        <Label color={data.labels} />
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt={data.user} />}
    </Container>
  );
}

export default Card;
