import React, { useState, useEffect } from 'react';
const TimerAPI = {
    time: '',
    subscribe(cb) {
        this.time = setInterval(() => {
            cb(Date.now());
        }, 1000);
    },
    unsubscribe() {
        clearImmediate(this.time)
    }
}


function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //相当于 componentDidMount
        document.title = `You clicked ${count} times`;
    }, []);
    useEffect(() => {
        //相当于 侦听count的变化时触发
        document.title = `You clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        //相当于 componentDidMount，componentDidUpdate 
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        //相当于 componentDidMount，componentDidUpdate 
        TimerAPI.subscribe((d) => console.log(d))
        return function cleanup() {
            //相当于 componentWillUnmount 
            TimerAPI.unsubscribe()
        };
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

const About = () => {
    return (
        < div  >
            <p>About</p>
        </div >
    )
}
export default About