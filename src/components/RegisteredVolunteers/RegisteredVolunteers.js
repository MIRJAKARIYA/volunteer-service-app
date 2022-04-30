import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import RegisteredVolunteer from "../RegisteredVolunteer/RegisteredVolunteer";

const RegisteredVolunteers = () => {
  const [user] = useAuthState(auth);
  const [volunteerList, setVolunteerList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getVolunteerList = async () => {
      const email = user.email;
      const url = `http://localhost:5000/volunteers?email=${email}`;
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
  }, [user, navigate]);

  //handleOwnVolunteer
  const handleOwnVolunteer = (id) => {
    console.log(id);
  };

  console.log(volunteerList);
  return (
    <div class="overflow-x-auto">
      <table class="table md:w-[80%] mx-auto">
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
    </div>
  );
};

export default RegisteredVolunteers;
