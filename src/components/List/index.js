import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Container } from './styles';

function List({ data, index: listIndex }) {
  console.log(data);
  return (
    <Container>
      <header>
        <h2>
          {data.title}
          <span>{data.cards.length}</span>
        </h2>

        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} listIndex={listIndex} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
