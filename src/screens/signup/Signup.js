import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup'


import AppInput from '../../components/AppInput'
import { styles } from './styles'
import Appbutton from '../../components/Appbutton'
import ImagesPath from '../../constants/ImagesPath'
import NavigationString from '../../constants/NavigationStrings'
import AuthInput from '../../components/AuthInput'
import { useDispatch } from 'react-redux';
import { doSingup } from '../../store/actions/AuthAction';


const validationschema = Yup.object().shape({
  Email: Yup.string().required().email().trim().label("Email"),
  Password: Yup.string().required().min(6),
  ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match'),
  firstName: Yup.string().required('no first name provided.').label("First Name"),
  lastName: Yup.string().label("Last Name"),
});

export default function Singup({ navigation }) {
const [loading, setloading] = useState(false)
const dispatch=useDispatch()

  const ctaSignUP = (val) => {
    dispatch(doSingup(setloading,val.ConfirmPassword,val.Email,val.firstName,val.lastName))  
  }
  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.UserImage}>
              <Image style={styles.logo} source={ImagesPath.Doctor} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Formik
              initialValues={{ Email: '', Password: '', ConfirmPassword: '', firstName: '', lastName: '', }}
              validationSchema={validationschema}
              onSubmit={values => ctaSignUP(values)}>
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <AuthInput
                    onchange={handleChange("firstName")}
                    keyboardType="email-address"
                    blur={() => setFieldTouched("firstName")}
                    placeholderText='Enter your First Name...'
                    error={errors.firstName && touched.firstName}
                  />
                 
                  <AuthInput
                    onchange={handleChange("lastName")}
                    keyboardType="email-address"
                    blur={() => setFieldTouched("lastName")}
                    placeholderText='Enter your Last Name...'
                    error={errors.lastName && touched.lastName}
                  />
                  <AuthInput
                    onchange={handleChange("Email")}
                    keyboardType="email-address"
                    blur={() => setFieldTouched("Email")}
                    placeholderText='Enter your email...'
                    error={errors.Email && touched.Email}
                  />
                  <AuthInput
                    onchange={handleChange("Password")}
                    secure={true}
                    error={errors.Password && touched.Password}
                    blur={() => setFieldTouched("Password")}
                    placeholderText='Enter your Password...' />
                  <AuthInput
                    onchange={handleChange("ConfirmPassword")}
                    secure={true}
                    error={errors.ConfirmPassword && touched.ConfirmPassword}
                    blur={() => setFieldTouched("ConfirmPassword")}
                    placeholderText='Enter your Confirm Password...' />

                  <Appbutton style={styles.btn} name={'Sign Up'} onPress={handleSubmit} />
                </>)}
            </Formik>
          </View>
        </View>
        <View style={styles.singupText}>
          <Text style={styles.singup}>Already have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationString.Login)} style={styles.singupBtn}><Text style={styles.singupBtnTxt}>Login</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}