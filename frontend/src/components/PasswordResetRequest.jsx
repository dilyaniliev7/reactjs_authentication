import '../App.css'
import {Box} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import {useNavigate} from 'react-router-dom'

const PasswordResetRequest = () => {
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()

    const submission = (data) => {
        AxiosInstance.post(`api/password_reset`,{
            email: data.email,
        })

        .then((response) => {
            localStorage.setItem('Token', response.data.token)
            navigate(`/home`)
        }
        ).catch(() => {
                console.log("Error during login", error)
            })
    }
    return (
            <div className={"myBackground"}>
            <form onSubmit={handleSubmit(submission)}>
            <Box className={"whiteBox"}>
                <Box className={"itemBox"}>
                    <Box className={"title"}> Request password reset </Box>
                </Box>

                <Box className={"itemBox"}>
                    <MyTextField
                        label={"Email"}
                        name={"email"}
                        control={control}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyButton
                        label={"Request password reset"}
                        type={"submit"}
                    />
                </Box>

                <Box className={"itemBox"} sx={{flexDirection:'column'}}>
                </Box>
            </Box>
        </form>
        </div>
        )
    }

export default PasswordResetRequest