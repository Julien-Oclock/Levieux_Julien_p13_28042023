
const editUserForm = () => {
    return (
        <section className="login">
            <div className="login__header">
            <i className="fa-solid fa-circle-user"></i>
            <h1>Edit Info</h1>
            </div>
            <form className="login__form" onSubmit={handleSubmit(submitForm)}>
                <div className="form-group">
                    <label htmlFor="firstName">
                       FirstName:
                    </label>
                    <input  
                        type="text" 
                        id="firstName"
                    />
                </div>               
                <div className="form-group">
                    <label className="login__label" htmlFor="lastName">
                        LastName:
                    </label>
                    <input
                        className="login__input"
                        type="lastName"
                        id="lastName"
                    /> 
                </div>
                <button type='submit' className='submit-button'>
                    Update
                </button>
            </form>
        </section>
    );
};