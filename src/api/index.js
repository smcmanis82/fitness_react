import axios from "axios";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(id) {
  try {
    const { data } = await axios.patch(`${BASE}/activities/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function createRoutine(name, goal) {
//   try {
//     const myToken = JSON.parse(localStorage.getItem("token"));

//     const response = await fetch(`${BASE}/routines`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${myToken}`,
//       },
//       body: JSON.stringify({
//         name,
//         goal,
//         isPublic: true,
//       }),
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
