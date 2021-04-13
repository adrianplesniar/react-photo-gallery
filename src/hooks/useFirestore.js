import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    // useEffect(() => {
    //     const unsub = projectFirestore.collection(collection)
    //         .orderBy('createdAd', 'desc')
    //         .onSnapshot((snap) => {
    //             console.log(snap[0]);
    //             let documents = [];
    //             snap.forEach(doc => {
    //                 documents.push({...doc.data(), id: doc.id});
    //                 console.log(snap);
    //             });
    //             setDocs(documents);
    //         });

    //     return () => unsub();

    // }, [collection])

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            // .orderBy('createdAd', 'desc')
            .onSnapshot((snap) => {
                console.log(snap[0]);
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                    console.log(snap);
                });
                setDocs(documents);
            });

        return () => unsub();

    }, [collection])

    return {docs};
}

export default useFirestore;