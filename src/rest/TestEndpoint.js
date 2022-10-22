// //create a class component
// const url = '';

// class API {
//     //get request
//     get = async () => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log('There was an error with GET:', error);
//         }
//     }
//     //post request
//     post = async (newComment) => {
//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newComment),
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log('There was an error with POST:', error);
//         }
//     }
//     //update request
//     update = async (id, newComment) => {
//         try {
//             const response = await fetch(`${url}/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newComment),
//             });
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log('There was an error with PUT/Update:', error);
//         }
//     }
//     //delete request
//     delete = async (id) => {
//         try {
//             await fetch(`${url}/${id}`, {
//                 method: "DELETE",
//             });
//         } catch (error) {
//             console.log('There was an error with DELETE:', error);
//         }
//     }
// }


// export const api = new API();