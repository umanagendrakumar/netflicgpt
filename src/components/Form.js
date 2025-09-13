import { useRef, useState } from "react";
import { isDataValid } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [errormessage, setErrorMessage] = useState("");

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleUser = () => {
        setIsNewUser(!isNewUser);
        setErrorMessage("");
    };

    const handleButtonClick = () => {
        const message = isDataValid(email.current.value, password.current.value);
        setErrorMessage(message);

        // if message has something, it means there is an error, & we should not proceed
        if (message) return;

        // else Here you would typically handle the sign-in or sign-up logic
        if (isNewUser) { // handle sign-up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else { // handle sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const { uid, email, displayName } = userCredential.user;
                    dispatch(addUser({ uid, email, displayName }));
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black sm:bg-black/70 p-3 sm:p-14 w-[450px]">
                <form className='flex flex-col gap-4'
                    onSubmit={(e) => e.preventDefault()}>
                    <h1 className='text-white font-bold text-3xl mb-4'>{isNewUser ? "Sign Up" : "Sign In"}</h1>
                    {isNewUser && <input
                        ref={name}
                        type="text"
                        placeholder='Name'
                        className='p-3 border border-gray-500 bg-transparent text-red-500  outline-none' />}
                    <input
                        ref={email}
                        type="email"
                        placeholder="Email"
                        className="p-3 border border-gray-500 bg-transparent text-red-500 outline-none"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-3 border border-gray-500 bg-transparent text-red-500 outline-none"
                    />
                    <p className='text-red-700 font-semibold'>{errormessage}</p>

                    <button className="bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700"
                        onClick={handleButtonClick}>
                        {isNewUser ? "Sign Up" : "Sign In"}
                    </button>

                    <p className='text-gray-400 font-semibold'>
                        {isNewUser ? "Have an Account?" : "New to Netflix?"}
                        <span className='text-white hover:underline cursor-pointer' onClick={toggleUser}>
                            {isNewUser ? "Sign In now." : "Sign up now."}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Form;