'use client'
import React, { CSSProperties, useState } from 'react';

import { useCSVReader } from 'react-papaparse';
const styles = {
    csvReader: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    } as CSSProperties,
    browseFile: {
        width: '20%',
    } as CSSProperties,
    acceptedFile: {
        border: '1px solid #ccc',
        height: 45,
        lineHeight: 2.5,
        paddingLeft: 10,
        width: '80%',
    } as CSSProperties,
    remove: {
        borderRadius: 0,
        padding: '0 20px',
    } as CSSProperties,
    progressBarBackgroundColor: {
        backgroundColor: 'red',
    } as CSSProperties,
};

const AddByCSV = () => {
    const { CSVReader } = useCSVReader();
    const [objectState, setObjectState] = useState({});

    const handleUploadAccepted = (results: any) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
        setObjectState({ ...results.data });
        console.log(objectState);
    };

    return (
        <div>
            <h1>Add By CSV</h1>
            <CSVReader onUploadAccepted={handleUploadAccepted}>
                {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                }: any) => (
                    <>
                        <div style={styles.csvReader}>
                            <button type='button' {...getRootProps()} style={styles.browseFile}>
                                Browse file
                            </button>
                            <div style={styles.acceptedFile}>
                                {acceptedFile && acceptedFile.name}
                            </div>
                            <button {...getRemoveFileProps()} style={styles.remove}>
                                Remove
                            </button>
                        </div>
                        <ProgressBar style={styles.progressBarBackgroundColor} />
                    </>
                )}
            </CSVReader>
            <div>
                {/* TODO : Don't touch this  */}

            </div>
        </div>
    )
}

export default AddByCSV
