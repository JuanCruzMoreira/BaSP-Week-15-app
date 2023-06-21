import { useState } from 'react';
import styles from './signup.module.css';
import { useHistory, useParams } from 'react-router-dom';
import SharedModal from '../../Shared/Modal';
import Button from '../../Shared/Button';
import { signUpMember } from '../../../redux/auth/thunks';
import { useDispatch } from 'react-redux';

const MemberForm = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const [member, setMember] = useState({
		firstName: '',
		lastName: '',
		dni: '',
		phone: '',
		email: '',
		password: '',
		city: '',
		birthDay: '',
		postalCode: '',
		isActive: true,
		membership: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		createMember(member);
	};

	const onChange = (e) => {
		setMember({
			...member,
			[e.target.name]: e.target.value
		});
	};

	const createMember = async (member) => {
		try {
			const response = await dispatch(signUpMember(member))
			if (!response.data) {
				setAlertMessage(response.message);
				setIsSuccess(false);
				setShowAlert(true);
			} else {
				setAlertMessage(response.message);
				setIsSuccess(true);
				setShowAlert(true);
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const handleCloseAlert = () => {
		if (isSuccess) {
			history.push('/members');
		} else {
			setShowAlert(false);
		}
	};

	const formatDate = (dateString) => {
		const parts = dateString.split('-');
		const year = parseInt(parts[0]);
		const month = parseInt(parts[1]) - 1;
		const day = parseInt(parts[2]);
		const date = new Date(year, month, day);

		const formattedYear = date.getFullYear();
		const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
		const formattedDay = date.getDate().toString().padStart(2, '0');

		return `${formattedYear}-${formattedMonth}-${formattedDay}`;
	};

	return (
		<>
			<div className={styles.formContainer}>
				<h2 className={styles.formTitle}>Register</h2>
				<SharedModal
					isDelete={false}
					show={showAlert}
					closeModal={handleCloseAlert}
					typeStyle={isSuccess ? 'success' : 'error'}
					title={isSuccess ? 'Success' : 'Something went wrong'}
					body={alertMessage}
				/>
				<form className={styles.formMembers}>
					<div className={`${styles.formColumn} ${styles.formLeft}`}>
						<div className={styles.formInputs}>
							<label>Name</label>
							<input type="text" value={member.firstName} onChange={onChange} name="firstName" />
						</div>
						<div className={styles.formInputs}>
							<label>Last Name</label>
							<input type="text" value={member.lastName} onChange={onChange} name="lastName" />
						</div>
						<div className={styles.formInputs}>
							<label>DNI</label>
							<input type="text" value={member.dni} onChange={onChange} name="dni" />
						</div>
						<div className={styles.formInputs}>
							<label>Phone</label>
							<input type="text" value={member.phone} onChange={onChange} name="phone" />
						</div>
						<div className={styles.formInputs}>
							<label>Email</label>
							<input type="email" value={member.email} onChange={onChange} name="email" />
						</div>
					</div>
					<div className={`${styles.formColumn} ${styles.formRight}`}>
						<div className={styles.formInputs}>
							<label>Password</label>
							<input type="password" value={member.password} onChange={onChange} name="password" />
						</div>
						<div className={styles.formInputs}>
							<label>City</label>
							<input type="text" value={member.city} onChange={onChange} name="city" />
						</div>
						<div className={styles.formInputs}>
							<label>Date of birth</label>
							<input
								type="date"
								onClick={() => setIsEditing(true)}
								value={isEditing ? member.birthDay : formatDate(member.birthDay)}
								onChange={onChange}
								name="birthDay"
							/>
						</div>
						<div className={styles.formInputs}>
							<label>ZIP code</label>
							<input type="text" value={member.postalCode} onChange={onChange} name="postalCode" />
						</div>
						<div className={styles.formInputsDiv}>
							<div className={styles.membershipActive}>
								<div>
									<label>Memberships</label>
									<select
										className={styles.formSelect}
										value={member.membership}
										onChange={onChange}
										name="membership"
									>
										<option value="">Select an option</option>
										<option value="Black">Black</option>
										<option value="Gold">Gold</option>
										<option value="Silver">Silver</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className={styles.buttonContainer}>
					<Button text={'Cancel'} type={'cancel'} clickAction={() => history.push('/auth/login')} />
					<Button text={'Register'} type={'submit'} clickAction={handleSubmit} />
				</div>
			</div>
		</>
	);
};

export default MemberForm;