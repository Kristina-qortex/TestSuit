/// <reference types="Cypress" />
import practicePage from "./suitObject/suitObject.cy"
describe('Test Case 2', function() 
{
 
it('Select country',function() {
 //Check radio buttons
 const Practice = new practicePage()
Practice.navigate()
Practice.selectCountries().type('Uk')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text() === "Ukraine")
    {
    $e1.click()
    } 
      
    })
}  )

}  )