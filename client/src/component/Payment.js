import React, { useEffect, useState } from "react";
import * as Action from "../store/actions";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SendIcon from "@material-ui/icons/Send";
import {
  OverlayTrigger,
  Tooltip as BTooltip,
} from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialFormValue = {
  userName: "",
  total: "",
  address: "",
  Mobile: "",
};

function Payment(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState(initialFormValue);
  const [buttonShow, setButtonShow] = useState(true);

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("*user name is required "),
    address: Yup.string().required("*address is required"),
    Mobile: Yup.number().required("*mobile is required"),
  });

  return (
    <React.Fragment>
      <Formik
        enableReinitialize={true}
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting  }) => {
          values.total = 500;
          //strip payment
          const cardElement = elements.getElement(CardElement);
          // Use your card Element with other Stripe.js APIs
          stripe
            .createToken(cardElement)
            .then((result) => {
              values.stripeToken = result.token.id;
              const config = {
                headers: { "content-type": "application/json" },
              };
              axios({
                method: "POST",
                url: "user/orders",
                headers: config,
                data: values,
              })
                .then((res) => {
                  console.log("delet response ::", res);
                  const deleteResponse = res.data;
                  if (deleteResponse) {
                    // dispatch(userDeleteSuccess(deleteResponse));
                    // dispatch(isUserUpdated(true))
                    console.log({ message: "Success" });
                  } else {
                    console.log({
                      message: "Something fetch Category wrong!!",
                    });
                  }
                })
                .catch((err) => {
                  console.log({ message: "Something went wrong!!" });
                });

              //dispatch(Action.isUserRegisterSuccess(false))
            })
            .catch((error) => console.log(error));

          // if (error) {
          //   console.log("[error]", error);
          // } else {
          //   console.log("[PaymentMethod]", paymentMethod);
          // }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
          getFieldProps,
        }) => (
          <form className="shadow p-5" onSubmit={handleSubmit}>
            <h3 className="flex justify-center mb-4">Checkout</h3>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Usser Name<span className="text-danger">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="userName"
                  value={values.userName}
                  {...getFieldProps("userName")}
                  onChange={handleChange}
                  onBlur={() => {
                    handleBlur({ target: { name: "userName" } });
                  }}
                  className="form-control"
                  id="userName"
                  placeholder="Enter Your Name"
                  isInvalid={touched.userName && errors.userName}
                  isValid={touched.userName && !errors.userName}
                />
                {/* <ErrorMessage name="userName" />   */}
                <div className="text-danger">
                  <ErrorMessage name="userName" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                mobile no<span className="text-danger">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  name="Mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  {...getFieldProps("Mobile")}
                  className="form-control"
                  id="Mobile"
                  placeholder="1234567891"
                  isInvalid={touched.Mobile && errors.Mobile}
                  isValid={touched.Mobile && !errors.Mobile}
                />
                <div className="text-danger">
                  <ErrorMessage name="Mobile" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Address<span className="text-danger">*</span>
              </label>
              <div className="col-sm-10">
                <textarea
                  type="text"
                  rows="5"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  {...getFieldProps("address")}
                  className="form-control"
                  id="address"
                  placeholder="Write here ........"
                  isInvalid={touched.address && errors.address}
                  isValid={touched.address && !errors.address}
                />
                <div className="text-danger">
                  <ErrorMessage name="address" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <CardElement
                className="card"
                options={{
                  style: {
                    base: {
                      backgroundColor: "white",
                    },
                  },
                }}
              />
            </div>
            {buttonShow ? (
              <div className="form-group row ">
                <div className="col-sm-10 offset-sm-2 flex justify-center">
                  <OverlayTrigger overlay={<BTooltip>{"submit"}</BTooltip>}>
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="btn btn-success"
                    >
                      {" "}
                      <SendIcon /> Order Now
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            ) : null}
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}

const mapStateToProps = ({ user }) => ({
  employee: user.employee,
  isUserRegister: user.isUserRegister,
});

export default connect(mapStateToProps)(Payment);

{
  /* <p className="text-left">right aligned text on all viewport sizes.</p>
            <p className="text-sm-center">center aligned text on viewports sized SM (small) or wider.</p>
            <p className="text-md-right">right aligned text on viewports sized MD (medium) or wider.</p>
            <p className="text-lg-left">left aligned text on viewports sized LG (large) or wider.</p>
            <p className="text-xl-right">right aligned text on viewports sized XL (extra-large) or wider.</p>
            <div className="container">
              <div className="row no-gutters text-white">
                <div className="col-xl-4 col-md-3 col-sm-1 bg-primary">Flex item</div>
                <div className="col-xl-4 col-md-3 col-sm-1 bg-success">Flex item</div>
                <div className="col-xl-4 col-md-6 col-sm-1 bg-primary">Flex item</div>
              </div> */
}
