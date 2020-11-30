import React, { useState, useEffect } from 'react';

function useCustomHookModalHistory() {
    const [state, setState] = useState('');
    const [modalHistory, setModalHistory] = useState([]);

    useEffect(() => {
        if(state != ""){
            setModalHistory([...modalHistory, state]);
        }
    }, [state])
    
    return [modalHistory, setState];
}

export default useCustomHookModalHistory;