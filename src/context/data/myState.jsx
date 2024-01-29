import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function myState(props) {
    const[loading,setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const [allProducts, setAllProducts] = useState([]);

    //* Add Product Function
    const addProduct = async () => {
        if (products.title == "" || products.description == "" ) {
            return alert('required');
        }
        const productRef = collection(fireDB, "products")
        
        try {
            await addDoc(productRef, products,)
            getProducts();
            alert("Task added successfully")
            setTimeout(() => {
                window.location.href = '/';
            }, 800);
            setProducts("")
        } catch (error) {
            console.log(error)
        }
    }

    // * Get Products Function
    const getProducts = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time"),
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setAllProducts(productsArray)
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    //* Edit handle Function 
    const ediProductHandle = (item) => {
        setProducts(item)
    }

    // * Edit handle Function
    const editProducts = async () => {
        try {
            await setDoc(doc(fireDB, "products", products.id), products);
            getProducts();
            alert("Task updated successfully");
            setTimeout(() => {
                window.location.href = '/';
            }, 800);
        } catch (error) {
            console.log(error)
        }
        setProducts("")
    }

    // * Delete handle Function
    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDB, "products", item.id));
            getProducts();
            alert('Task deleted successfully');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <MyContext.Provider value={{ products, setProducts, addProduct, allProducts, ediProductHandle, editProducts, deleteProduct,loading}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState