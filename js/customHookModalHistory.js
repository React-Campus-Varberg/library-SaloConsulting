import React, { useState, useEffect } from 'react';

function useCustomHookModalHistory() {
    console.log('useCustomHookModalHistory');
    console.log('useCustomHookModalHistory');
    console.log('useCustomHookModalHistory');
    const [state, setState] = useState('');
    const [modalHistory, setModalHistory] = useState([]);

    useEffect(() => {
        console.log('test!!');
        console.log('modalHistory - state');
        if(state != ""){
            setModalHistory([...modalHistory, state])
        }
        console.log(modalHistory);
    }, [state])

    return [modalHistory, setState];
}

export default useCustomHookModalHistory;