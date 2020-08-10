import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

let styles = {
    overflow:"hidden"
}

export default function GithubCalendar(){

    return(
        <>
                <div className="text-center mt-5"><br/><br/>
                    <h1 className="text-center text-dark my-5">Github Contributions</h1>
                    <div className="border rounded m-5 p-4">
                        <GitHubCalendar username="ahmedshaf02" blockSize={20} showTotalCount={true} >
                        <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    </div>
                </div>
                <div style={styles} className="text-center mt-5 sandbox"><br/><br/>
                   <h1 className="text-center text-dark my-5">Code Sandbox</h1>
                   <div className="border rounded m-5 p-4">
                       <a href="https://codesandbox.io/u/ahmedshaf02" target="_blank">

                            <img src="/images/sandbox.PNG" className="img-fluid w-100 "/>
                       </a>
                    </div>
                </div>
        </>
    )
}