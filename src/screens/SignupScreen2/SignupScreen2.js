import React from 'react'
import Header from "../../components/Header/Header";
import "./SignupScreen2.css";

const SignupScreen = () => {
    return (
        <>
            <Header />
            <div className="profile">
                <img className="profile-image"
                    src="https://s3-alpha-sig.figma.com/img/a453/7ab5/98eceaf2cdb2ecef360336d04ba0d19a?Expires=1629676800&Signature=fjHXbika22cammTrRYBczSX2EVWqjeXvyvzvPbA97oNivBzQBb8ej8K~YmCcSDOduYnPHGHucPWIQ~kTq2nXOfqBVKPptdIKj4P7q3FRt0mdE72ir5VcSdJqTNv4HsBEUH6MwZgcZXRvKyhWvbvFMtEBCPcOzz3b~ghieIyGmi9QLYvrOk9oyUgNO5aj0kqPt5BKWrz35DsRKk2rNtJt69XYoPozgDl~8gzQO~gwLzSGZdpWVBhSogTqqTJrCOd-TqxJJ0V~xCNqj8vJNftuW7Ga3ZdIGBnDHsuGxe0XIdPrq488gaCTVASwVfL~2~tOZvOuxh0FLRswj5ib1zHvOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <div className="profile-details">
                    <p>FirstName LastName</p>
                    <p>Assitant Sales Agent</p>
                    <p>Microsoft</p>
                </div>
            </div>
            <p className="congo-text">
                Congratulation You are One step away from learning 20$ per hr
            </p>
            <div className="launguage-proficiency">
                <p>Enter your Launguage Proficiency</p>
            </div>
        </>
    )
}

export default SignupScreen
