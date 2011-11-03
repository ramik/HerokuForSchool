describe("Selecting item spec", function() {
    beforeEach(function() {
        setFixtures('<div><div id="1" class="candidateitem"></div><div id="2" class="candidateitem"></div></div>')
    });

    it("should put right class to item when clicked", function() {
        expect($('#1').hasClass(class_for_marking)).toBeFalsy()
        markCandidatesWithClass()
        $('#1').click()
        expect($('#1').hasClass(class_for_marking)).toBeTruthy()
    });

    it("should put right class to item when double clicked", function() {
        expect($('#1').hasClass(class_for_marking)).toBeFalsy()
        markCandidatesWithClass()
        $('#1').click().click()
        expect($('#1').hasClass(class_for_marking)).toBeTruthy()
    });

    it("should change class to another item when it is clicked", function() {
        expect($('#1').hasClass(class_for_marking)).toBeFalsy()
        expect($('#2').hasClass(class_for_marking)).toBeFalsy()
        markCandidatesWithClass()
        $('#1').click()
        $('#2').click()
        expect($('#1').hasClass(class_for_marking)).toBeFalsy()
        expect($('#2').hasClass(class_for_marking)).toBeTruthy()
    });
});