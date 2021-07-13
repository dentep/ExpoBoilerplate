import { create } from "apisauce";
import { showMessage } from "react-native-flash-message";

const apiClient = create({
	baseURL: "https://api.thecatapi.com/v1",
});

//use token for api
//const token = "";

apiClient.addAsyncRequestTransform(async (request) => {
	request.headers["x-api-key"] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response && response.ok) {
		return response;
	} else {
		return showMessage({
			message: "Error",
			description: "No result received.",
			type: "danger",
		});
	}
};

export default apiClient;
