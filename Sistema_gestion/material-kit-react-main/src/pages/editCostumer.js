import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { firebaseCrear } from 'src/utils/FirebaseUtil';
import { firebaseConfig } from 'src/utils/FirebaseUtil';



const editCostumer = () => {

  
  const router = useRouter();

  const crearCliente=(cliente)=> {
    
    //e.preventDefault(); sirve para parar todo evento consecutivo
   
  firebaseCrear('clientes',cliente);  

router.push('/customers');
    
   }
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone:''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      firstName: Yup
        .string()
        .max(255)
        .required(
          'First name is required'),
      lastName: Yup
        .string()
        .max(255)
        .required(
          'Last name is required'),
        phone: Yup
            .string()
            .max(60)
            
    }),
    onSubmit: (usuario) => {
      crearCliente(usuario);
      //alert(usuario.firstName);
     
      //
      
    }
  });

  

  return (
    <>
      <Head>
        <title>
          Modificar Cliente
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Crear nuevo cliente
              </Typography>

            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />

<TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="phone"
              value={formik.values.phone}
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Crear
              </Button>
            </Box>

          </form>
        </Container>
      </Box>
    </>
  );
};

export default editCostumer;
