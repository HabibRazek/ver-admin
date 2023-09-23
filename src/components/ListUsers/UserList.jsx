"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi';
import Swal from 'sweetalert2';


const UserList = () => {

    const [users, setUsers] = useState([]);  // Declare users state first
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [selectedUsers, setSelectedUsers] = useState([]);


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phoneNumber.includes(searchTerm)
    );

    useEffect(() => {
        // Fetch the list of users from the API
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => setError(err.message));
    }, []);

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const nextPage = () => {
        if (currentPage < Math.ceil(users.length / itemsPerPage)) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleUserSelection = (e, userId) => {
        if (e.target.checked) {
            setSelectedUsers(prev => [...prev, userId]);
        } else {
            setSelectedUsers(prev => prev.filter(id => id !== userId));
        }
    };




    const deleteSelectedUsers = async () => {
        // First, we show the confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover the deleted users!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete them!',
            cancelButtonText: 'No, keep them',
        });

        // If the user confirms, proceed to delete
        if (result.isConfirmed) {
            try {
                const response = await fetch('/api/user', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ids: selectedUsers }),
                });

                if (!response.ok) {
                    throw new Error('Failed to delete users.');
                }

                const deletedUsers = await response.json();

                setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
                setSelectedUsers([]);

                Swal.fire({
                    title: 'Deleted!',
                    text: 'Users have been deleted.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

            } catch (error) {
                setError(`Error: ${error.message}`);

                Swal.fire({
                    title: 'Error!',
                    text: `Failed to delete users: ${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: 'Cancelled',
                text: 'Users are safe :)',
                icon: 'info',
                confirmButtonText: 'OK',
            });
        }
    };






    return (
        <div>
            <h2 className='text-center text-red-600 text-2xl md:text-xl font-bold mb-8'>Liste des inscriptions</h2>
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="search users..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-10 p-2 w-full border rounded"  // Increase left padding to make room for the icon
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <GiMagnifyingGlass />
                </span>
            </div>





            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-white">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-red-600 dark:text-white">
                        {/* ... [rest of thead content remains unchanged] */}
                        <tr>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Select</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">First Name</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Last Name</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Email</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Phone Number</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Nationality</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Company</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Department</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Job Title</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Genre</th>
                            <th scope="col" className="px-6 py-3 md:px-3 md:py-1">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => (
                            <tr key={user.id} className="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-red-100">
                                <td className="px-6 py-4 md:px-3 md:py-2">
                                    <input
                                        type="checkbox"
                                        value={user.id}
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={e => handleUserSelection(e, user.id)}
                                    />
                                </td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.firstName}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.lastName}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.email}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.phoneNumber}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.nationality}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.companyName}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.department}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.jobTitle}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">{user.genre}</td>
                                <td className="px-6 py-4 md:px-3 md:py-2">
                                    <Link href={`/edit-user/${user.id}`}>
                                        <p className="bg-blue-500 text-white px-4 py-1 ">Edit</p>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* ... [rest of the table and pagination content remains unchanged] */}
                <nav className="flex items-center justify-between pt-4 mb-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900">{indexOfFirstUser + 1}-{indexOfLastUser > users.length ? users.length : indexOfLastUser}</span> of <span className="font-semibold text-gray-900">{users.length}</span>
                    </span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <button onClick={prevPage} className="flex items-center justify-center px-3 h-8 ml-0 text-white bg-red-600 border mx-2" disabled={currentPage === 1}>Previous</button>
                        </li>
                        <li>
                            <button onClick={nextPage} className="flex items-center justify-center px-3 h-8 ml-0 text-white bg-red-600 border mx-2" disabled={currentPage === Math.ceil(users.length / itemsPerPage)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <button onClick={deleteSelectedUsers} className="bg-red-500 text-white p-2 rounded mt-4 mx-4">Delete Selected</button>
            <button className="bg-red-500 text-white p-2 rounded mt-4"><Link href="/add-user"> Add User </Link>
            </button>

        </div>
    )
}

export default UserList