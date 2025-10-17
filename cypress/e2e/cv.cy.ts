import {APP_API} from './../../src/app/config/app-api.config';
import {APP_ROUTES} from './../../src/app/config/app.routes';
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.intercept(APP_API.cv, {fixture:'cvs'})
    cy.visit('/cv');
    cy.get('[data-cy="cvList"]');
    cy.get('[data-cy="cvList"]').children().first().contains('Aymen');
    cy.get('[data-cy="cvCard"]').should('not.exist');
    cy.get('[data-cy="cvList"]').children().first().click();
    cy.get('[data-cy="cvCard"]');
    cy.intercept(APP_API.cv + 1, {fixture:'cv1'})
    cy.get('[data-cy="cvCardDetailsButton"]').click({ force: true });
    cy.location().should((actualLocaltion) => {
      expect(actualLocaltion.pathname).to.equal(`/${APP_ROUTES.cvPrefix}/1`);
    });
  });
});


