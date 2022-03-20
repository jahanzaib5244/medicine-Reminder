import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'


import Appbutton from '../../components/Appbutton'
import { styles } from './styles'
import ImagesPath from '../../constants/ImagesPath'
import NavigationString from '../../constants/NavigationStrings'
import AuthInput from '../../components/AuthInput'
import { doLogin } from '../../store/actions/AuthAction';


const validationschema = Yup.object().shape({
  email: Yup.string().required().email().trim().label("Email"),
  password: Yup.string().required().label('Password')
});
export default function Login({ navigation }) {

  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()

  const getlogin = (values) => {
    console.log(values)
    dispatch(doLogin(setloading, values.email, values.password))
  }
  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.logoContainer}>

            <Image style={styles.logo} source={ImagesPath.logo} />
            <Text style={styles.AppName}>Medicine Reminder</Text>
          </View>
          <View style={styles.inputContainer}>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationschema}
              onSubmit={values => getlogin(values)}>
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <AuthInput
                    onchange={handleChange("email")}
                    keyboardType="email-address"
                    blur={() => setFieldTouched("email")}
                    placeholderText='Enter your email...'
                    error={errors.email && touched.email}
                  />

                  <AuthInput
                    onchange={handleChange("password")}
                    secure={true}
                    error={errors.password && touched.password}
                    blur={() => setFieldTouched("password")}
                    placeholderText='Enter your password...' />
                  <Appbutton style={styles.btn} name={'Login'} onPress={handleSubmit} />
                </>)}
            </Formik>

            <TouchableOpacity onPress={() => navigation.navigate(NavigationString.ForgetPassword)} style={styles.forgetBtn}>
              <Text style={styles.forgetText}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.singupText}>
          <Text style={styles.singup}>Don't have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationString.Signup)} style={styles.singupBtn}><Text style={styles.singupBtnTxt}>singup</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}