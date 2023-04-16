import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from '../../redux/store/store'
import { BrowserRouter as Router } from "react-router-dom";
import Form from '../../components/Form/createProduct';

describe('Form page', () => {
    it('Memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman: ', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        )
        const productNameInput = screen.getByPlaceholderText("Product Name...");
        fireEvent.change(productNameInput, { target: { value: 'Product' } });
        expect(screen.getByPlaceholderText("Product Name...").value).toBe('Product');
        const productNameDisplay = screen.getByPlaceholderText('Product Name...');
        expect(productNameDisplay).toBeInTheDocument();
    });

    it('Memastikan bahwa pilihan product category yang dipilih dapat disimpan dan ditampilkan dengan benar: ', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        )
        const categorySelect = screen.getByLabelText('Product Category');
        const categoryOption = "Volvo";
        fireEvent.change(categorySelect, { target: { value: categoryOption } });
        expect(categorySelect.value).toBe(categoryOption);
        const categoryDisplay = screen.getByText(categoryOption);
        expect(categoryDisplay).toBeInTheDocument();
    })

    it("Memastikan product name tidak mengandung character", () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        );
        const productNameInput = screen.getByPlaceholderText("Product Name...");
        fireEvent.change(productNameInput, { target: { value: `@/#{}` } });
        expect(screen.getByText('Product Name must not contain symbols.')).toBeInTheDocument();
    });

    it("Memastikan product name tidak boleh kosong", () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        );
        const productNameInput = screen.getByPlaceholderText("Product Name...");
        fireEvent.change(productNameInput, { target: { value: '' } });
        expect(screen.getByText('Product name must be field in')).toBeInTheDocument();
    });

    it("Memastikan product name tidak boleh lebih dari 25 karakter", () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        );
        const productNameInput = screen.getByPlaceholderText("Product Name...");
        fireEvent.change(productNameInput, { target: { value: 'abcdefghijklmnopqrstuvwxyz' } });
        expect(screen.getByText('Product names cannot be more than 25')).toBeInTheDocument();
    });

    it("Memastikan form input tidak boleh kosong", () => {
        render(
            <Provider store={store}>
                <Router>
                    <Form />
                </Router>
            </Provider>
        );
        //cek product name
        const productNameInput = screen.getByPlaceholderText("Product Name...");
        fireEvent.change(productNameInput, { target: { value: '' } });
        expect(screen.getByText('Product name must be field in')).toBeInTheDocument();
        
         //cek product category
        const categorySelect = screen.getByLabelText('Product Category');
        fireEvent.change(categorySelect, { target: { value: '' } });
        expect(screen.getByText('Product category must be choosen')).toBeInTheDocument();
        
         //cek product image
        const productImgInput = screen.getByLabelText('Image of Product')
        fireEvent.change(productImgInput, { target: { value: '' } });
        expect(screen.getByText('Product image must be choosen')).toBeInTheDocument();
        
         //cek product freshness
        const productFreshnessInput1 = screen.getByLabelText('Brand New');
        fireEvent.change(productFreshnessInput1, { target: { value: '' } });
        expect(screen.getByText('Product freshness must be select')).toBeInTheDocument();
        const productFreshnessInput2 = screen.getByLabelText('Second Hand');
        fireEvent.change(productFreshnessInput2, { target: { value: '' } });
        expect(screen.getByText('Product freshness must be select')).toBeInTheDocument();
        const productFreshnessInput3 = screen.getByLabelText('Refurbished');
        fireEvent.change(productFreshnessInput3, { target: { value: '' } });
        expect(screen.getByText('Product freshness must be select')).toBeInTheDocument();
        
         //cek product desc
        const productDescInput = screen.getByLabelText('Additional Description')
        fireEvent.change(productDescInput, { target: { value: '' } });
        expect(screen.getByText('Product description must be field in')).toBeInTheDocument();
        
         //cek product price
        const productPriceInput = screen.getByLabelText('Product Price')
        fireEvent.change(productPriceInput, { target: { value: '' } });
        expect(screen.getByText('Product price must be field in')).toBeInTheDocument();
    });
});
