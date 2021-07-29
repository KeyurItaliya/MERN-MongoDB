import React,{ lazy } from 'react';
import axios from 'axios';

////// protect routes
const Home = lazy(()=> import('../component/Home'))
const ReportDashboardApp = lazy(()=> import('../component/JobSeekers'))
const Pagination = lazy(()=> import('../component/Pagination'))
const RegisterUser = lazy(()=> import('../component/Register'))
const MailApp = lazy(()=> import('../component/Register'))
const ViewCampaign = lazy(()=> import('../component/Register'))
const SettingApp = lazy(()=> import('../component/NiravCode'))
const ImportCustomerData = lazy(()=> import('../component/Register'))
const Payment = lazy(()=> import('../component/Payment'))
const ReportData = lazy(()=> import('../component/Reports'))
const PayFastPayment = lazy(() => import('../component/PayFastPayment'))

const Login = lazy(()=> import('../component/Login'))
const Register = lazy(()=> import('../component/Register'))
export const serverBaseURL = 'http://localhost:8000/';
axios.defaults.baseURL = serverBaseURL;

export const PriveteRoutes = [
	{
		path:'/',
		component:Home
	},
	{
		path:'/jobseeker',
		component:ReportDashboardApp
	},
	{
		path : '/pagination',
		component : Pagination
	},
	{
		path:'/registeruser',
		component:RegisterUser
	},
	{
		path:'/reports',
		component:ReportData
	},
	{
		path:'/mail',
		exact: true,
		component:MailApp
	},
	{
		path:'/mail/campaigns',
		component:ViewCampaign
	},
	{
		path:'/settings',
		component:SettingApp
	},
	,
	{
		path:'/payment',
		component:Payment
	},
	{
		path:'/notiphyimport',
		component:ImportCustomerData
	},
	{
		path:'/payFastPayment',
		component:PayFastPayment
	},
	// {
	// 	path:'/login',
	// 	exact:true,
	// 	component:Login 
	// },
	///// temp routes

	// {
	// 	path:'/pages/errors/error-404',
	// 	component:lazy(()=>import('component/MainDesh'))
	// },
	// {
	// 	path:undefined,
	// 	component: () => <Redirect to="/pages/errors/error-404" />
	// },
]

export const PublicRoutes = [
	{
		path:'/login',
		component: Login
	}, 
	{
		path:'/register',
		component: RegisterUser
	}
]