import { firestore } from "./Config"
import { addDoc, collection, onSnapshot } from "firebase/firestore"

let dbRef = collection(firestore, "posts");
export const PostStatus = (object) => {
    addDoc(dbRef, object)
    .then((res) => {
        console.log("Posted")
    })
    .catch((err) => {
        console.error("Error in Posting")
    })
};

export const getPosts = (setAllStatuses) => {
    onSnapshot(dbRef, (response) => {
        setAllStatuses(response.docs.map((docs) => {
            return {...docs.data(), id: docs.id}
        }))
    })
}