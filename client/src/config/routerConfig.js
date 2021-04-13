import React,{ lazy } from 'react';
import axios from 'axios';

////// protect routes
const MainDeshReport = lazy(()=> import('../component/Reports'))
const ReportDashboardApp = lazy(()=> import('../component/Listitem'))
const Pagination = lazy(()=> import('../component/Pagination'))
const NotificationApp = lazy(()=> import('../component/MainDesh'))
const MailApp = lazy(()=> import('../component/MainDesh'))
const ViewCampaign = lazy(()=> import('../component/MainDesh'))
const SettingApp = lazy(()=> import('../component/NiravCode'))
const ImportCustomerData = lazy(()=> import('../component/MainDesh'))
const ReportData = lazy(()=> import('../component/Reports'))

const Login = lazy(()=> import('../component/Login'))
const Register = lazy(()=> import('../component/Register'))

export const serverBaseURL = 'http://localhost:8000/';
axios.defaults.baseURL = serverBaseURL;

export const AuthRoutes = [
	{
		path:'/',
		exact : true,
		component:MainDeshReport
	},
	{
		path:'/dashboard',
		exact : true,
		component:ReportDashboardApp
	},
	{
		path : '/pagination',
		exact : true,
		component : Pagination
	},
	{
		path:'/notifications',
		exact : true,
		component:NotificationApp
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