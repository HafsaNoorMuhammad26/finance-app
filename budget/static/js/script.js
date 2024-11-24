document.addEventListener("DOMContentLoaded", function () {
    // Add a new category when Enter key is pressed
    document.querySelector('#categoryInput').addEventListener('keydown', function (e) {
        if (e.keyCode !== 13) {
            return;
        }

        e.preventDefault(); // Prevent form submission

        var categoryName = this.value.trim();
        if (categoryName === '') return; // Skip if empty

        this.value = ''; // Clear the input field
        addNewCategory(categoryName); // Add new category
        updateCategoriesString(); // Update the hidden input
    });

    // Function to add a new category to the DOM
    function addNewCategory(name) {
        const container = document.querySelector('#categoriesContainer');
        container.insertAdjacentHTML(
            'beforeend',
            `<li class="category">
                <span class="name">${name}</span>
                <span onclick="removeCategory(this)" class="btnRemove bold">X</span>
            </li>`
        );
    }

    // Function to update the categories string in the hidden input
    function updateCategoriesString() {
        const categories = fetchCategoryArray();
        document.querySelector('input[name="categoriesString"]').value = categories.join(',');
    }

    // Function to fetch all category names
    function fetchCategoryArray() {
        const categories = [];
        document.querySelectorAll('.category').forEach(function (e) {
            const name = e.querySelector('.name').innerHTML.trim();
            if (name !== '') {
                categories.push(name);
            }
        });
        return categories;
    }

    // Expose `removeCategory` globally to handle dynamic elements
    window.removeCategory = function (e) {
        e.parentElement.remove();
        updateCategoriesString();
    };
});
