import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserInfoAsync } from '../../app/Features/auth/authAction';


import './styles.scss';


const EditUserForm = () => {

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data)
        dispatch(updateUserInfoAsync(data));
    };

  return (
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
  );
};

export default EditUserForm;