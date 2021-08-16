const topNav = `
<header class="mainnav"><a class="sr-only sr-only-focusable" href="#blockContainer" target="">Skip to main content</a> 
<div class="navbar navbar-expand fixed-top flex-column flex-md-row justify-content-between"><a class="navbar-brand" href="https://www.tamuk.edu/index.html" title="Back to tamuk.edu" target=""><img alt="" class="brand" src="/src/assets/web_header1.png"></a> <block-xhtml>
        <div><div class="navbar-nav-scroll">
    <ul class="navbar-nav bd-navbar-nav flex-row">
        <li class="nav-item mainnavbtn font-weight-bold">
            <a class="nav-link btn mainbtn" href="https://www.tamuk.edu/yourtime/index.html" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');" target="">
                    Future Students
            </a>
        </li>
        <li class="nav-item mainnavbtn font-weight-bold">
            <a class="nav-link btn mainbtn" rel="noopener" href="https://calendar.tamuk.edu" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');" target="_blank">
                    Calendar
            </a>
        </li>
        <li class="nav-item mainnavbtn font-weight-bold">
            <a class="nav-link btn mainbtn" rel="noopener" href="https://jnet.tamuk.edu/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');" target="_blank">
                    JNET 
            </a>
        </li>
        <li class="nav-item mainnavbtn font-weight-bold">
            <a aria-controls="collapseSearch" aria-expanded="false" class="nav-link btn mainbtn" data-toggle="collapse" href="#collapseSearch" role="button" aria-label="search-box-drop-down" target="">
                    Search 
            </a>
        </li>
        <li class="nav-item mainnavbtn font-weight-bold d-block d-md-none d-lg-none d-xl-none mobnav">
            <a aria-controls="collapseSearch" aria-expanded="false" class="nav-link btn mainbtn collapsed" data-toggle="collapse" role="button" href="#navbarNavDropdown1" aria-label="search-box-dropdown" target="">
                <svg class="svg-inline--fa fa-ellipsis-v fa-w-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" data-fa-i2svg=""><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg><!-- <i class="fas fa-ellipsis-v"></i> Font Awesome fontawesome.com -->
            </a>
        </li>
    </ul>
</div></div>
</block-xhtml></div>
</header>
`;

const googleScript = `(function () {
            var cx = "000725964214835075722:k4o8outgvwm";
            var gcse = document.createElement("script");
            gcse.type = "text/javascript";
            gcse.async = true;
            gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(gcse, s);
    })();`;

const googleScriptCreate = document.createElement("script")

const googleSearch = `
<div class="collapse sticky-top sticky-search" id="collapseSearch">
<div class="container gsc-container">
<script>
${
(function () {
            var cx = "000725964214835075722:k4o8outgvwm";
            var gcse = document.createElement("script");
            gcse.type = "text/javascript";
            gcse.async = true;
            gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(gcse, s);
})()
}
</script>

<gcse:search></gcse:search>
</div>
</div>
`;


const topSubNav = `
<div class="top-sub-navigation">
	<div class="d-none d-md-block d-lg-block container">
		<ul class="nav nav-pills nav-fill">
			<li class="nav-item dropdown topsubnav">
				<a aria-expanded="false" aria-haspopup="true" class="nav-link font-weight-bold dropdown-toggle" data-toggle="dropdown" href="#" id="dropdownMenuLink1" role="button">About</a>
				<div aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
					<a class="dropdown-item" href="/administration/index.html">Administration</a>
					<a class="dropdown-item" href="/news/index.html">Javelina News</a>
					<a class="dropdown-item" href="/about/index.html">Our History</a>
					<a class="dropdown-item" href="/administration/president/index.html">Office of the President</a>
					<a class="dropdown-item" href="/enrollment-management/admission/future-students/visit/index.html">Visit</a>
				</div>
			</li>
			<li class="nav-item dropdown topsubnav">
				<a aria-expanded="false" aria-haspopup="true" class="nav-link font-weight-bold dropdown-toggle" data-toggle="dropdown" href="#" id="dropdownMenuLink2" role="button">Admission</a>
				<div aria-labelledby="dropdownMenuLink2" class="dropdown-menu">
					<a class="dropdown-item" href="/enrollment-management/finaid/students/cost-of-attendance.html">Cost of Attendance</a>
					<a class="dropdown-item" href="/enrollment-management/admission/graduate/index.html">Graduate Admission</a>
					<a class="dropdown-item" href="/enrollment-management/finaid/index.html">Financial Aid</a>
					<a class="dropdown-item" href="/academicaffairssupport/oisss/index.html">International</a>
					<a class="dropdown-item" href="/enrollment-management/veterans/index.html">Military & Veteran Resource Center</a>
					<a class="dropdown-item" href="/rellis/index.html">RELLIS</a>
					<a class="dropdown-item" href="/enrollment-management/scholarships/index.html">Scholarships</a>
					<a class="dropdown-item" href="/enrollment-management/admission/index.html">Undergraduate Admission</a>
				</div>
			</li>
			<li class="nav-item dropdown topsubnav">
				<a aria-expanded="false" aria-haspopup="true" class="nav-link font-weight-bold dropdown-toggle" data-toggle="dropdown" href="#" id="dropdownMenuLink3" role="button">Academics</a>
				<div aria-labelledby="dropdownMenuLink3" class="dropdown-menu">
					<a class="dropdown-item" href="/academicaffairs/index.html">Academic Affairs</a>
					<a class="dropdown-item" href="/academics/index.html">Academics Home</a>
					<a class="dropdown-item" href="https://catalog.tamuk.edu/">Course Catalog Home</a>
					<a class="dropdown-item" href="https://as2.tamuk.edu:9203/PROD/bwckschd.p_disp_dyn_sched">Course Schedule</a>
					<a class="dropdown-item" href="/agriculture/index.html">Dick and Mary Lewis Kleberg College of Agriculture and Natural Resources</a>
					<a class="dropdown-item" href="/business/index.html">College of Business Administration</a>
					<a class="dropdown-item" href="/engineering/index.html">Frank H. Dotterweich College of Engineering</a>
					<a class="dropdown-item" href="/education/index.html">College of Education and Human Performance</a>
					<a class="dropdown-item" href="/artsci/index.html">College of Arts &amp; Sciences</a>
					<a class="dropdown-item" href="/orgs/grad/index.html">College of Graduate Studies</a>
					<a class="dropdown-item" href="/honors/index.html">Honors College</a>
				</div>
			</li>
			<li class="nav-item topsubnav">
				<a class="nav-link font-weight-bold" aria-label="Research" href="/academics/research.html">Research</a>
			</li>
			<li class="nav-item dropdown topsubnav">
				<a aria-expanded="false" aria-haspopup="true" class="nav-link font-weight-bold dropdown-toggle" data-toggle="dropdown" href="#" id="dropdownMenuLink4" role="button">Resources</a>
				<div aria-labelledby="dropdownMenuLink4" class="dropdown-menu">
					<a class="dropdown-item" href="/resources/index.html">A - Z Index</a>
					<a class="dropdown-item" href="/msub/bookstore/index.html">Bookstore</a>
					<a class="dropdown-item" href="/finance/financial-services/business-services/index.html">Business Services</a>
					<a class="dropdown-item" href="/maps/index.html">Campus Maps and Permits</a>
					<a class="dropdown-item" href="/shw/drc/index.html">Disability Resource Center</a>
					<a class="dropdown-item" href="/finance/employee-services/index.html">Employee Services</a>
					<a class="dropdown-item" href="/finance/index.html">Finance / Financial Services</a>
					<a class="dropdown-item" href="/finance/its/index.html">Information Technology Services (ITS)</a>
					<a class="dropdown-item" href="/finance/compliance/index.html">Office of Compliance</a>
					<a class="dropdown-item" href="/registrar/index.html">Office of the Registrar</a>
					<a class="dropdown-item" href="https://as2.tamuk.edu:9203/PROD/bwpkedir.P_DisplayDirectory">Staff/Faculty Directory</a>
					<a class="dropdown-item" href="/studentsuccess/repository/index.html">Student and Community Resources Repository</a>
					<a class="dropdown-item" href="/upd/index.html">University Police Department</a>
				</div>
			</li>
			<li class="nav-item topsubnav">
				<a class="nav-link font-weight-bold" aria-label="Alumni" href="https://www.javelinagiving.org/JavelinaAlumni">Alumni</a>
			</li>
			<li class="nav-item topsubnav">
				<a class="nav-link font-weight-bold" aria-label="Athletics" href="https://javelinaathletics.com/index.aspx">Athletics</a>
			</li>
		</ul>
	</div>
	<nav class="d-block d-md-none d-lg-none d-xl-none mobnav" style="text-align: center;">
		<div class="navbar-collapse collapse" id="navbarNavDropdown1">
			<ul class="navbar-nav nav nav-pills nav-fill">
				<li class="nav-item topsubnav">
					<a class="nav-link font-weight-bold" href="/administration/index.html">About</a>
				</li>
				<li class="nav-item dropdown topsubnav">
					<a class="nav-link font-weight-bold" href="/enrollment-management/admission/index.html">Admission</a>
				</li>
				<li class="nav-item dropdown topsubnav">
					<a class="nav-link font-weight-bold" href="/academics/index.html">Academics</a>
				</li>
				<li class="nav-item topsubnav">
					<a class="nav-link font-weight-bold" href="/academics/research.html">Research</a>
				</li>
				<li class="nav-item dropdown topsubnav">
					<a class="nav-link font-weight-bold" href="/resources/index.html">Resources</a>
				</li>
				<li class="nav-item topsubnav">
					<a class="nav-link font-weight-bold" href="https://www.javelinagiving.org/JavelinaAlumni">Alumni</a>
				</li>
				<li class="nav-item topsubnav">
					<a class="nav-link font-weight-bold" href="https://javelinaathletics.com/index.aspx">Athletics</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
`;

document.body.insertAdjacentHTML(
  "afterbegin",
  topNav + googleSearch + topSubNav
);
