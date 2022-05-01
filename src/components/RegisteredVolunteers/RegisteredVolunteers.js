import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import RegisteredVolunteer from "../RegisteredVolunteer/RegisteredVolunteer";

const RegisteredVolunteers = () => {
  const [user] = useAuthState(auth);
  const [volunteerList, setVolunteerList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getVolunteerList = async () => {
      const email = user.email;
      const url = `https://radiant-peak-60741.herokuapp.com/volunteers?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
        setVolunteerList(data);
      } catch (error) {
        if (
          error?.response?.status === 403 ||
          error?.response?.status === 401
        ) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getVolunteerList();
  }, [user, navigate, isDeleted]);

  //handleOwnVolunteer
  const handleOwnVolunteer = (id) => {
    fetch(
      `https://radiant-peak-60741.herokuapp.com/deleteregisteredvolunteer/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged === true) {
          setIsDeleted(!isDeleted);
          toast("Volunter removed successfully");
        }
      });
  };

  return (
    <>
      <PageTitle title="Volunteer List"></PageTitle>
      <div className="overflow-x-auto">
        <table className="table md:w-[60%] mx-auto mt-10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Registation date</th>
              <th>Volunteer list</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteerList.map((volunteer) => (
              <RegisteredVolunteer
                key={volunteer._id}
                volunteer={volunteer}
                handleOwnVolunteer={handleOwnVolunteer}
              ></RegisteredVolunteer>
            ))}
          </tbody>
        </table>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default RegisteredVolunteers;
