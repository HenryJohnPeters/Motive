/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import mapboxgl from "mapbox-gl";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
mapboxgl.accessToken = "pk.eyJ1IjoibWFwbWFrZXIxMjM0IiwiYSI6ImNraGM0aWllOTBhdnQycm5nMzk3ZzFwMW0ifQ.DUTM9-gpBSGHav22OeLhQg";

import { Map } from "../Modals/ModalMap";

export default function Example(props) {
	// const [open, setOpen] = useState(props.open);

	const cancelButtonRef = useRef(null);
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [coords, setCoords] = useState({ lat: 0, lng: 0 });

	const createEvent = () => {
		fetch("/api/event/create", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ coords: coords, name: name, decription: description }),
		}).then((res) => {
			console.log("Request complete! response:", res);
		});

		// fetch("/api/event/create", { test: "test" })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 	});
	};

	return (
		<Transition.Root show={props.open ? true : false} as={Fragment}>
			<Dialog as="div" className="relative z-40" initialFocus={cancelButtonRef} onClose={props.close}>
				<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative flex justify-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  ">
								<div className="w-[1000px] h-[500px] ">
									<Map setCoords={setCoords} />
									<form>
										<div className="w-full">
											<div> lat : {coords?.lat}</div>
											<div> lng : {coords?.lng}</div>
											<div className="mb-6">
												<input
													id="password"
													className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													placeholder="Name"
													onChange={(evt) => setName(evt.target.value)}
													required
												/>
											</div>
											<div className="mb-6">
												<input
													id="password"
													className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
													placeholder="Description"
													onChange={(evt) => setDescription(evt.target.value)}
													required
												/>
											</div>
											<button
												onClick={() => {
													createEvent();
												}}
												type="submit"
												className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
