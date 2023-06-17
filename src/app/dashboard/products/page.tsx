"use client"

function Products() {
    const handleProductAdd = (e) => {
        alert("Product has been added!");
    }

    return (
        <div>
            <h1>Shop products</h1>

            Product name: <input type="text" placeholder='Product name' />

            <br></br>

            Product Category:

            <select>
                <option selected disabled>Select Categories</option>
                <option>Health and fitness</option>
                <option>Clothing</option>
                <option>Technology</option>
                <option>Home</option>
            </select>

            <br></br>

            <textarea name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>

            <br></br>

            Upload Product Image: <input type="file" multiple />

            <br></br>

            Product Price: <input type="number" placeholder='Product price' />

            <br></br>

            <input type="button" value="Add product" onClick={(e) => { handleProductAdd(e) }} />
        </div>
    )
}

export default Products