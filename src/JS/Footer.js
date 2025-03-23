import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBBtn} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (

    
    <MDBFooter className='footer'>


      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='5' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                About Me
              </h6>
              <p style={{ fontSize: '15px' , textAlign: 'justify' }}>
              Hi, I'm Dinesh, a passionate Full-Stack Web Developer with hands-on experience in building dynamic and responsive web applications. I specialize in React and have a strong foundation in full-stack development. <br /> <br />

I recently completed my college studies and am eager to step into the corporate world. My passion lies in continuously learning and exploring new technologies to enhance my skills and stay ahead in the ever-evolving tech landscape. <br />  <br />

If you're looking for someone to build a website or collaborate on a project, feel free to reach out! I'm always excited to take on new challenges and contribute my expertise.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                Get connected with social networks:
              </h6>
              <p>
                <div>

          

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39', borderColor: '#dd4b39', width: '40px', height: '40px' }}
              href='mailto:dineshpandian008@gmail.com
?subject=Hello&body=Hi there!'
            role='button'
            target='_blank'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac', borderColor: '#ac2bac', width: '40px', height: '40px'  }}
            href='https://www.instagram.com/d.i.n_x_e.s.h/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca', borderColor: '#0082ca', width: '40px', height: '40px'  }}
            href='https://www.linkedin.com/in/dinesh-pandian43/'
            role='button'
            target='_blank'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' , borderColor: '#ffff', width: '40px', height: '40px'  }}
            href='https://github.com/dinesh4343'
            role='button'
            target='_blank'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
                  
                </div>
              </p>
            </MDBCol>


            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Chennai , Tamilnadu , India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                dineshpandian008@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 8531064585
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}