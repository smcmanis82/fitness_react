import axios from "axios";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api/";

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE}routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(id) {
  try {
    const { data } = await axios.patch(`${BASE}activities/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
