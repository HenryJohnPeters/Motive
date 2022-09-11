const Header = (props) => {
	return (
		<div className="relative bg-white shadow bg-gray-100">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
					<div className="flex text-black  text-4xl fot-bold justify-start">Motive</div>
					<div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
						<a href="login" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
							{props.loggedIn ? "Sign Out" : "Sign In "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
