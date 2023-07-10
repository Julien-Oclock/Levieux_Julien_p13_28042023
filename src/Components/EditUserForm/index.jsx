import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfoAsync } from '../../app/Features/auth/authAction';
import { handleEditForm } from '../../app/Features/auth/authSlice';
import { useGetUserDetailsQuery } from '../../app/Service/authService';
import { setCredentials } from '../../app/Features/auth/authSlice';



import './styles.scss';
import { useEffect } from 'react';


const EditUserForm = () => {

    const { register, handleSubmit } = useForm();

    const { userToken, userInfo, editForm } = useSelector(state => state.auth);


    const { data, isFetching } = useGetUserDetailsQuery('userDetails', { 
      token: userToken
  });

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(updateUserInfoAsync(formData));
    };

    const displayEditForm = () => {
      dispatch(handleEditForm());
  }


  useEffect(() => {
    if (data) {
        dispatch(setCredentials(data));
      }
  }, [data, dispatch]);



   let content = (
    editForm ? (
      <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">FirstName:</label>
          <input type="text" id="firstName" name="firstName" { ...register('firstName', {required: true}) } />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">LastName:</label>
          <input type="text" id="lastName" name="lastName" { ...register('lastName', {required: true})}/>
        </div>
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
     
    )
   : (
    <div>
    <h1>
        {isFetching ? <span>Loading...</span> : (
            userInfo ? (
                <span>{userInfo.firstName} {userInfo.lastName}</span>
            ) : (
                <span>User Info Not Found</span>
            )
        )}
    </h1>
    <button className='edit' onClick={displayEditForm}>Edit Name</button>
</div>
   ));

  return (
    content
  );
};

export default EditUserForm;