import React from 'react';
import { projectFirestore } from '../firebase/config';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(projectFirestore);

    return (
        <div className="img-grid">
            images            
        </div>
    )
}

export default ImageGrid;
