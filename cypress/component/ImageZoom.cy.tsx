import React from 'react';
import ImageZoom from '../../src/components/ImageZoom';
import { mount } from '@cypress/react18';

describe('<ImageZoom />', () => {
  it('renders the component', () => {
    cy.fixture('logo512.png').then((imageSrc) => {
      mount(<ImageZoom src={imageSrc} />);
      cy.get('.image-zoom-container').should('be.visible');
    });
  });

  it('shows zoom area on mouse enter', () => {
    cy.fixture('logo512.png').then((imageSrc) => {
      mount(<ImageZoom src={imageSrc} />);
      cy.get('.image-zoom-container').trigger('mouseover');
      cy.get('.zoom-area').should('exist');
    });
  });

  it('updates zoom area position on mouse move', () => {
    cy.fixture('logo512.png').then((imageSrc) => {
      mount(<ImageZoom src={imageSrc} />);
      cy.get('.image-zoom-container')
        .trigger('mouseover')
        .trigger('mousemove', { clientX: 100, clientY: 100 });
      cy.get('.zoom-area')
        .should('have.css', 'top')
        .and('match', /px/);
      cy.get('.zoom-area')
        .should('have.css', 'left')
        .and('match', /px/);
    });
  });
});
