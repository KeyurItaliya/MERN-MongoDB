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
const ReportData = lazy(()=> import('../component/Reports'))

const Login = lazy(()=> import('../component/Login'))
const Register = lazy(()=> import('../component/Register'))
export const serverBaseURL = 'http://localhost:8000/';
axios.defaults.baseURL = serverBaseURL;

export const AuthRoutes = [
	{
		path:'/',
		exact : true,
		component:Home
	},
	{
		path:'/jobseeker',
		exact : true,
		component:ReportDashboardApp
	},
	{
		path : '/pagination',
		exact : true,
		component : Pagination
	},
	{
		path:'/registeruser',
		exact : true,
		component:RegisterUser
	},
	{
		path:'/reports',
		exact : true,
		component:ReportData
	},
	{
		path:'/mail',
		exact: true,
		component:MailApp
	},
	{
		path:'/mail/campaigns',
		exact : true,
		component:ViewCampaign
	},
	{
		path:'/settings',
		exact:true,
		component:SettingApp
	},
	{
		path:'/notiphyimport',
		exact:true,
		component:ImportCustomerData
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

export const UnAuthRoutes = [
	{
		path:'/login',
		component: Login
	}, 
	{
		path:'/register',
		component: Register
	}
]