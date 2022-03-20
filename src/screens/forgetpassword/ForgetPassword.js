import React ,{useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';


import ImagesPath from '../../constants/ImagesPath'
import Appbutton from '../../components/Appbutton'
import { styles } from './styles'
import NavigationString from '../../constants/NavigationStrings'
import AuthInput from '../../components/AuthInput'
import { doForgetPassword } from '../../store/actions/AuthAction';

const validationschema = Yup.object().shape({
  email: Yup.string().required().email().trim().label("Email"),
});


export default function ForgetPassword({ navigation }) {
  const [loading, setloading] = useState(false)

  const dispatch = useDispatch()
  const PasswordReset = (val) => {
    dispatch(doForgetPassword(setloading, val.email))
  }
  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.logoContainer}>

            <Image style={styles.logo} source={ImagesPath.logo} />
            <Text style={styles.AppName}>Forget Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationschema}
              onSubmit={values => PasswordReset(values)}>
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <AuthInput
                    onchange={handleChange("email")}
                    keyboardType="email-address"
                    blur={() => setFieldTouched("email")}
                    placeholderText='Enter your email...'
                    error={errors.email && touched.email}
                  />

                  <Appbutton style={styles.btn} name={'Rest Password'} onPress={handleSubmit} />

                </>)}
            </Formik>
          </View>
        </View>
        <View style={styles.singupText}>
          <Text style={styles.singup}>Back to Login </Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationString.Signup)} style={styles.singupBtn}><Text style={styles.singupBtnTxt}>Login</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}