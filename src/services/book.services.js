import { db } from '../firebase'
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const collectionRef = collection(db, 'books')
class BookDataService {
    add = (book) => {
        return addDoc(collectionRef, book)
    }

    update = (id, book) => {
        // console.log(id,book)
        const exists = doc(db, 'books', id)
        return updateDoc(exists, book)
    }

    delete = (id) => {
        const exists = doc(db, 'books', id)
        return deleteDoc(exists)
    }

    getAll = () => {
        return getDocs(collectionRef)
    }

    get = (id) => {
        const exists = doc(db, 'books', id)
        return getDoc(exists)
    }
}

export default new BookDataService()