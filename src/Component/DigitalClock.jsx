import React, { useEffect, useState } from "react";

function DigitalClock() {
const [time, setTime] = useState(new Date());

useEffect(() => {
const timer = setInterval(() => {
setTime(new Date());
}, 1000);

// Cleanup the timer when the component is removed
return () => {
clearInterval(timer);
};
}, []);

return (

<div className="min-h-screen flex items-center justify-center bg-gray-100 p-
6">

<div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center
shadow-xl">
<h1 className="mb-6 text-3xl font-bold text-gray-800">
Digital Clock
</h1>

<div className="rounded-xl bg-gray-900 px-6 py-8">
<p className="text-5xl font-bold tracking-widest text-white">
{time.toLocaleTimeString()}
</p>
</div>

<p className="mt-6 text-gray-500">
The clock updates every second.
</p>
</div>
</div>
);

}

export default DigitalClock;