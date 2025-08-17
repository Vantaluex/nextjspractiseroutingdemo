'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
    return (
        <div className="container">
            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 0 auto; /* Centers horizontally */
                    padding: 20px;
                    text-align: center;
                }
                
                h1 {
                    color: #333;
                    margin-bottom: 30px;
                }

                img {
                    max-width: 200px;
                    height: auto;
                    margin: 20px 0;
                }

                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    margin: 5px;
                    background-color: #007bff;
                    color: white;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
            
            <h1>Sowwy, we can't find the page :(</h1>
            <img 
                src="https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif" 
                alt="Spinning cat error" 
            />
            <br />
            <br />
            <button className="btn">Go Back</button>
            <button className="btn">Go Home</button>
        </div>
    );
}
