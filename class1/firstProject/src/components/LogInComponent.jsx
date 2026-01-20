const LogInComponent = ({status})=>{
    return(
        <>

        {status ? <h1> Login Sucessful</h1> : <h1>Login Failure</h1>}
        
        </>
    )
}

export default LogInComponent;