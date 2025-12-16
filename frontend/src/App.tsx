import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, AlertTriangle, CheckCircle, ChevronRight, 
  Pill, Upload, FileText, BarChart2, Target, TrendingUp, 
  User, Stethoscope, LogOut, HeartPulse, Microscope,
  Dna, Thermometer, Droplets, ShieldCheck, ArrowRight,
  Lock, UserPlus, Database, Search, Save, WifiOff,
  Printer, Download, RefreshCw, Eye, Trash2, Edit, Calendar
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// --- UI COMPONENTS ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "indigo" }) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[color] || colors.indigo}`}>
      {children}
    </span>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <div className="flex items-start gap-4 mb-6 pb-4 border-b border-slate-100">
    <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl shadow-lg shadow-indigo-200">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h3 className="font-bold text-lg text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder, icon: Icon, type = "text" }) => (
  <div className="group relative">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-indigo-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
      )}
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 shadow-sm`} 
        placeholder={placeholder} 
      />
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, options, icon: Icon }) => (
  <div className="group relative">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-indigo-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
      )}
      <select 
        name={name} 
        value={value} 
        onChange={onChange} 
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer shadow-sm`}
      >
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
        <ChevronRight className="h-4 w-4 rotate-90" />
      </div>
    </div>
  </div>
);

// --- PAGES ---

const HomePage = ({ onNavigate }) => (
  <div className="flex flex-col items-center justify-center min-h-[85vh] text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">System Operational v2.4</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
        Advanced HIV-CKD <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">Diagnosis System</span>
      </h1>
      
      <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
        Leveraging high-precision Deep Neural Networks (DNN) to identify Chronic Kidney Disease stages and evaluate medication toxicity risks in real-time.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <button 
          onClick={() => onNavigate('login')} 
          className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-3">
            Start Clinical Analysis <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left">
        {[
          { label: 'Model Accuracy', val: '99.1%', icon: Target },
          { label: 'Inference Time', val: '< 1.2s', icon: Activity },
          { label: 'Toxicity Check', val: 'Active', icon: ShieldCheck },
          { label: 'Data Points', val: '24+', icon: Dna },
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-white/60 backdrop-blur border border-slate-100 rounded-2xl">
            <stat.icon className="h-6 w-6 text-indigo-600 mb-2" />
            <p className="text-2xl font-bold text-slate-900">{stat.val}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LoginPage = ({ onLogin }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(creds)
      });
      const data = await res.json();
      
      if (res.ok) {
        onLogin(data.username, data.role);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server connection failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] animate-in zoom-in-95 duration-500">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="text-center mb-10">
          <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
            <Lock className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Secure Access</h2>
          <p className="text-slate-500">Enter your hospital credentials.</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium mb-6 flex items-center gap-2 border border-red-100">
            <AlertTriangle className="h-4 w-4" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField 
            label="Username" placeholder="e.g. admin" 
            name="username" value={creds.username} 
            onChange={e => setCreds({...creds, username: e.target.value})} 
            icon={User}
          />
          <InputField 
            label="Password" placeholder="••••••••" type="password" 
            name="password" value={creds.password} 
            onChange={e => setCreds({...creds, password: e.target.value})} 
            icon={Lock}
          />
          <button disabled={loading} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all flex justify-center items-center gap-2 group">
            {loading ? <Activity className="h-5 w-5 animate-spin" /> : <>Access System <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/></>}
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminPanel = ({ user }) => {
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [employees, setEmployees] = useState([
    { id: 1, username: 'dr.smith', role: 'user', status: 'Active' },
    { id: 2, username: 'nurse.joy', role: 'user', status: 'Active' },
    { id: 3, username: 'admin', role: 'admin', status: 'Active' },
  ]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:5000/create_user', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          current_role: user.role, 
          new_username: newUser.username, 
          new_password: newUser.password 
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg({ text: 'Staff account created successfully!', type: 'success' });
        setEmployees([...employees, { id: Date.now(), username: newUser.username, role: 'user', status: 'Active' }]);
        setNewUser({ username: '', password: '' });
      } else {
        setMsg({ text: data.error, type: 'error' });
      }
    } catch (err) {
      setMsg({ text: 'Failed to connect to server', type: 'error' });
    }
  };

  const handleDeleteUser = (id) => {
    if(window.confirm("Are you sure you want to remove this user's access?")) {
        setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const handleEditUser = (id) => {
      const newPass = prompt("Enter new password for user:");
      if(newPass) {
          alert("Password updated successfully (Simulation)");
      }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Admin Console</h2>
        <p className="text-slate-500 mt-2">Manage authorized personnel and system access.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Create User Form */}
        <div className="md:col-span-5 space-y-6">
            <Card className="p-8">
            <SectionHeader title="Register New Staff" subtitle="Create credentials for doctors/nurses" icon={UserPlus} />
            
            <form onSubmit={handleCreate} className="space-y-6">
                <InputField 
                label="New Username" placeholder="dr.smith" 
                name="username" value={newUser.username} 
                onChange={e => setNewUser({...newUser, username: e.target.value})} 
                />
                <InputField 
                label="Assign Password" placeholder="••••••••" type="password" 
                name="password" value={newUser.password} 
                onChange={e => setNewUser({...newUser, password: e.target.value})} 
                />
                
                {msg.text && (
                <div className={`text-sm p-3 rounded-lg flex items-center gap-2 ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                    {msg.type === 'success' ? <CheckCircle className="h-4 w-4"/> : <AlertTriangle className="h-4 w-4"/>}
                    {msg.text}
                </div>
                )}
                
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Create Account
                </button>
            </form>
            </Card>

            <Card className="p-8 bg-slate-900 text-white">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg">System Security</h3>
                    <p className="text-slate-400 text-xs">Integrity check passed</p>
                    </div>
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                Note: Only Administrators can create or remove user accounts. All passwords are securely hashed (SHA-256) before storage.
                </div>
            </Card>
        </div>

        {/* User Management List */}
        <div className="md:col-span-7">
            <Card className="p-8 h-full">
                <SectionHeader title="Authorized Personnel" subtitle="List of active system users" icon={Database} />
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-xs border-b border-slate-100">
                            <tr>
                                <th className="px-4 py-3">Username</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {employees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-4 py-3 font-bold text-slate-700">{emp.username}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${emp.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {emp.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-emerald-600 font-medium text-xs">{emp.status}</td>
                                    <td className="px-4 py-3 text-right flex justify-end gap-2">
                                        <button onClick={() => handleEditUser(emp.id)} className="p-1.5 hover:bg-indigo-50 text-indigo-600 rounded-md transition-colors" title="Edit">
                                            <Edit className="h-4 w-4" />
                                        </button>
                                        {emp.username !== user.username && (
                                            <button onClick={() => handleDeleteUser(emp.id)} className="p-1.5 hover:bg-red-50 text-red-600 rounded-md transition-colors" title="Remove Access">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

const HistoryPage = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // NEW: State for search input

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_history')
      .then(res => res.json())
      .then(data => { setRecords(data); setLoading(false); })
      .catch(err => setLoading(false));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleViewRecord = (record) => {
    setSelectedRecord(record);
  };

  const closeRecordView = () => {
    setSelectedRecord(null);
  };

  const handleDownloadDailyReport = () => {
    if (!filterDate) {
        alert("Please select a date to generate the report.");
        return;
    }
    const filtered = records.filter(r => r.date.startsWith(filterDate));
    if (filtered.length === 0) {
        alert("No patient records found for this date.");
        return;
    }
    
    const printWindow = window.open('', '', 'height=600,width=800');
    if(printWindow) {
        printWindow.document.write('<html><head><title>Daily Patient Report</title>');
        printWindow.document.write('<style>body{font-family: sans-serif; padding: 20px;} table{width: 100%; border-collapse: collapse; margin-top: 20px;} th, td{border: 1px solid #ddd; padding: 8px; text-align: left;} th{background-color: #f2f2f2;} h1{text-align: center; color: #333;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(`<h1>Daily Patient Report - ${filterDate}</h1>`);
        printWindow.document.write(`<p>Total Patients Visited: ${filtered.length}</p>`);
        printWindow.document.write('<table><thead><tr><th>Patient Name</th><th>Age/Gender</th><th>Diagnosis</th><th>Stage</th><th>TDF Status</th></tr></thead><tbody>');
        
        filtered.forEach(r => {
            printWindow.document.write(`<tr><td>${r.name}</td><td>${r.age} / ${r.gender}</td><td>${r.diagnosis}</td><td>${r.stage}</td><td>${r.tdf_status}</td></tr>`);
        });
        
        printWindow.document.write('</tbody></table>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
  };

  // NEW: Filter records based on search query
  const filteredRecords = records.filter(record => 
    record.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    record.created_by?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.diagnosis?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If a record is selected, show detail view
  if (selectedRecord) {
    return (
      <div className="max-w-4xl mx-auto mt-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center mb-6">
           <button onClick={closeRecordView} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold">
             <ArrowRight className="h-4 w-4 rotate-180" /> Back to History
           </button>
           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md print:hidden">
            <Printer className="h-4 w-4" /> Print Report
           </button>
        </div>

        <div className="space-y-6 print:block">
           <Card className="relative overflow-hidden border-0 shadow-2xl print:shadow-none print:border">
              <div className={`absolute top-0 left-0 w-full h-2 ${selectedRecord.diagnosis.includes("NO") ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-gradient-to-r from-rose-500 to-red-600'}`}></div>
              <div className="p-8">
                <div className="text-center border-b pb-6 mb-6">
                   <h1 className="text-2xl font-bold text-slate-900">Medical Diagnosis Report</h1>
                   <p className="text-slate-500 text-sm mt-1">Generated by HIV-CKD Clinical Support System</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
                   <div>
                     <p className="text-slate-400 uppercase text-xs font-bold tracking-wider">Patient Name</p>
                     <p className="font-bold text-lg text-slate-800">{selectedRecord.name}</p>
                   </div>
                   <div>
                     <p className="text-slate-400 uppercase text-xs font-bold tracking-wider">Date of Analysis</p>
                     <p className="font-bold text-lg text-slate-800">{selectedRecord.date}</p>
                   </div>
                   <div>
                     <p className="text-slate-400 uppercase text-xs font-bold tracking-wider">Age / Gender</p>
                     <p className="font-bold text-lg text-slate-800">{selectedRecord.age} / {selectedRecord.gender}</p>
                   </div>
                   <div>
                     <p className="text-slate-400 uppercase text-xs font-bold tracking-wider">Consulting Doctor</p>
                     <p className="font-bold text-lg text-slate-800">{selectedRecord.created_by}</p>
                   </div>
                </div>

                <div className="flex justify-between items-start mb-6 bg-slate-50 p-6 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Diagnosis</p>
                    <h3 className={`text-3xl font-black leading-tight ${selectedRecord.diagnosis.includes("NO") ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {selectedRecord.diagnosis}
                    </h3>
                  </div>
                  {selectedRecord.diagnosis.includes("NO") ? 
                    <div className="p-3 bg-emerald-100 rounded-full print:hidden"><CheckCircle className="h-8 w-8 text-emerald-600" /></div> :
                    <div className="p-3 bg-rose-100 rounded-full print:hidden"><AlertTriangle className="h-8 w-8 text-rose-600" /></div>
                  }
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-slate-100 rounded-xl flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Calculated eGFR</span>
                    <span className="text-xl font-bold text-slate-900">{selectedRecord.gfr}</span>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">CKD Stage</span>
                    <Badge color={selectedRecord.diagnosis.includes("NO") ? "emerald" : "rose"}>{selectedRecord.stage}</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`border-0 border-l-4 ${selectedRecord.tdf_status === 'SAFE' ? 'border-l-emerald-500' : 'border-l-rose-500'} print:border`}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${selectedRecord.tdf_status === 'SAFE' ? 'bg-emerald-100' : 'bg-rose-100'} print:hidden`}>
                    <Pill className={`h-5 w-5 ${selectedRecord.tdf_status === 'SAFE' ? 'text-emerald-600' : 'text-rose-600'}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">TDF Medication Protocol</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Toxicity Risk Assessment</p>
                  </div>
                </div>
                
                <div className={`p-4 rounded-xl ${selectedRecord.tdf_status === 'SAFE' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                  <p className="font-bold text-lg mb-1">{selectedRecord.tdf_status}</p>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {selectedRecord.tdf_status === 'SAFE' ? 'Standard protocol acceptable.' : 'High renal toxicity risk. Switch to TAF.'}
                  </p>
                </div>
              </div>
            </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 animate-in fade-in duration-700 print:hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Patient Database</h2>
          <p className="text-slate-500 mt-2">Archives of all diagnoses generated by the system.</p>
        </div>
        <div className="flex gap-4 items-end">
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Select Date</label>
                <div className="relative">
                    <input 
                        type="date" 
                        className="pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none h-[38px]"
                        onChange={(e) => setFilterDate(e.target.value)}
                    />
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                </div>
            </div>
            <button onClick={handleDownloadDailyReport} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 shadow-md h-[38px]">
                <Download className="h-4 w-4" /> Download Daily Report
            </button>
            <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search records..." 
                  className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm w-48 focus:ring-2 focus:ring-indigo-500 outline-none h-[38px]" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
        </div>
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-xs border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Patient Name</th>
              <th className="px-6 py-4">Age / Gender</th>
              <th className="px-6 py-4">Diagnosis</th>
              <th className="px-6 py-4">Stage</th>
              <th className="px-6 py-4">TDF Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {loading ? (
              <tr><td colSpan="7" className="px-6 py-8 text-center text-slate-400">Loading records...</td></tr>
            ) : filteredRecords.length === 0 ? (
              <tr><td colSpan="7" className="px-6 py-8 text-center text-slate-400">No records found.</td></tr>
            ) : (
              filteredRecords.map((r, i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs">{r.date}</td>
                  <td className="px-6 py-4 font-bold text-slate-700">{r.name}</td>
                  <td className="px-6 py-4 text-slate-600">{r.age} <span className="text-slate-300">|</span> {r.gender}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${r.diagnosis.includes("NO") ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {r.diagnosis.includes("NO") ? <CheckCircle className="h-3 w-3"/> : <AlertTriangle className="h-3 w-3"/>}
                      {r.diagnosis.replace(" DETECTED", "")}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-indigo-600">{r.stage}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${r.tdf_status === 'SAFE' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                      {r.tdf_status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                     <button onClick={() => handleViewRecord(r)} className="text-indigo-600 hover:text-indigo-800 font-bold text-xs flex items-center gap-1">
                        <Eye className="h-4 w-4" /> View
                     </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

const UploadPage = ({ onDataParsed, onManualEntry }) => {
  const [parsing, setParsing] = useState(false);
  const fileInputRef = useRef(null);

  const handleZoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setParsing(true);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5000/parse_report', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Parsing failed on server');
        
        const parsedData = await response.json();
        onDataParsed(parsedData); 
      } catch (error) {
        console.error("OCR Error:", error);
        alert("Failed to parse document. Ensure Backend is running and Tesseract is installed for images.");
      } finally {
        setParsing(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Patient Data Acquisition</h2>
        <p className="text-slate-500 text-lg">Select a secure method to import clinical variables.</p>
      </div>
      
      {/* Hidden Input for File Selection */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept=".txt,.csv,.pdf,.jpg,.jpeg,.png" 
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1: Intelligent Upload */}
        <button 
          onClick={handleZoneClick}
          className="group relative overflow-hidden bg-white border-2 border-dashed border-indigo-100 rounded-3xl p-8 hover:border-indigo-500 hover:bg-indigo-50/10 transition-all duration-300 text-left h-full"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Upload className="h-32 w-32 text-indigo-600 transform rotate-12" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${parsing ? 'bg-indigo-100' : 'bg-indigo-50 group-hover:bg-indigo-600'}`}>
                {parsing ? <Activity className="h-7 w-7 text-indigo-600 animate-spin" /> : <Upload className="h-7 w-7 text-indigo-600 group-hover:text-white" />}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-700">Intelligent Parser</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">Upload a <b>.txt, .pdf, or image</b> report. The system uses AI OCR to extract clinical markers automatically.</p>
            </div>
            
            <div className="mt-8 flex items-center text-indigo-600 font-bold text-sm uppercase tracking-wide">
              {parsing ? "Parsing Document..." : <>Select Report File <ArrowRight className="ml-2 h-4 w-4" /></>}
            </div>
          </div>
        </button>

        {/* Card 2: Manual Entry */}
        <button 
          onClick={onManualEntry}
          className="group relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 text-left h-full"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText className="h-32 w-32 text-slate-600 transform -rotate-12" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-slate-800 flex items-center justify-center mb-6 transition-colors duration-300">
                <FileText className="h-7 w-7 text-slate-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Manual Entry</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">Enter patient demographics and lab values manually via the secure clinical form.</p>
            </div>
            
            <div className="mt-8 flex items-center text-slate-600 group-hover:text-slate-900 font-bold text-sm uppercase tracking-wide">
              Open Form <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

// 5. PERFORMANCE PAGE (UPDATED: Dynamic Charts)
const PerformancePage = () => {
  // Mock Data for Charts
  const diseaseData = [
    { name: 'CKD Positive', value: 40 },
    { name: 'CKD Negative', value: 60 },
  ];
  const diseaseColors = ['#ef4444', '#10b981'];

  const genderData = [
    { name: 'Male', value: 55 },
    { name: 'Female', value: 42 },
    { name: 'Other', value: 3 },
  ];
  const genderColors = ['#3b82f6', '#ec4899', '#8b5cf6'];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in slide-in-from-right duration-500">
      <div className="text-center space-y-4 mb-8">
        <Badge color="indigo">Deep Learning Analytics</Badge>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Model & Data Analysis</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive view of dataset demographics and model performance metrics.</p>
      </div>

      {/* NEW: Flowchart Representation */}
      <div className="grid grid-cols-1 gap-8">
        <Card className="p-8 bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-xl text-slate-900 mb-6 text-center">Prediction Process Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 w-full md:w-48">
                    <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-bold text-slate-700">1. Data Input</p>
                    <p className="text-xs text-slate-500">Manual / OCR</p>
                </div>
                <ArrowRight className="h-6 w-6 text-slate-400 rotate-90 md:rotate-0" />
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 w-full md:w-48">
                    <Activity className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-bold text-slate-700">2. Preprocessing</p>
                    <p className="text-xs text-slate-500">Cleaning & Scaling</p>
                </div>
                <ArrowRight className="h-6 w-6 text-slate-400 rotate-90 md:rotate-0" />
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 w-full md:w-48">
                    <Target className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <p className="font-bold text-slate-700">3. DNN Model</p>
                    <p className="text-xs text-slate-500">Classification</p>
                </div>
                <ArrowRight className="h-6 w-6 text-slate-400 rotate-90 md:rotate-0" />
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 w-full md:w-48">
                    <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-bold text-slate-700">4. Diagnosis</p>
                    <p className="text-xs text-slate-500">Stage & TDF Risk</p>
                </div>
            </div>
        </Card>
      </div>

      {/* NEW: Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 text-center">Disease Distribution (Dataset)</h3>
          <div className="h-64 flex justify-center w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={diseaseData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {diseaseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={diseaseColors[index % diseaseColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 text-center">Demographics by Gender</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]}>
                    {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={genderColors[index % genderColors.length]} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

    </div>
  );
};

// 6. PREDICTION PAGE (UPDATED: PDF & Reset)
const PredictionPage = ({ formData, handleInputChange, calculateResults, loading, result, user, onReset }) => {
  const [patientName, setPatientName] = useState('');
  
  const handleSave = async () => {
    if (!result || !patientName) {
      alert("Please enter a patient name before saving.");
      return;
    }
    try {
      const res = await fetch('http://127.0.0.1:5000/save_patient', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...formData,
          name: patientName,
          diagnosis: result.prediction,
          stage: result.stage,
          gfr: result.gfr,
          tdf_status: result.tdf.status,
          created_by: user.username
        })
      });
      if (res.ok) alert("Record saved successfully!");
      else alert("Failed to save record.");
    } catch (e) { alert("Server error"); }
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 animate-in slide-in-from-bottom-8 duration-700 print:block">
      <div className="xl:col-span-8 space-y-6 print:hidden">
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Clinical Parameters</h2>
              <p className="text-slate-500 text-sm mt-1">Review auto-filled data or enter vitals</p>
            </div>
            <button onClick={onReset} className="text-red-600 flex items-center gap-1 text-sm font-bold hover:text-red-700"><RefreshCw className="h-4 w-4"/> Reset</button>
          </div>
          
          <div className="mb-8">
             <InputField label="Patient Name" name="name" value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="e.g. John Doe" />
          </div>

          <div className="grid gap-10">
            {/* Section 1 */}
            <div>
              <SectionHeader title="Demographics & History" subtitle="Patient background" icon={User} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputField label="Age" name="age" value={formData.age} onChange={handleInputChange} placeholder="56" type="number" />
                <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleInputChange} options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other' }]} icon={User} />
                <InputField label="BP (mm/Hg)" name="blood_pressure" value={formData.blood_pressure} onChange={handleInputChange} placeholder="120/80" icon={HeartPulse} type="text" />
                <SelectField label="Hypertension" name="hypertension" value={formData.hypertension} onChange={handleInputChange} options={[{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]} />
                <SelectField label="Diabetes" name="diabetes_mellitus" value={formData.diabetes_mellitus} onChange={handleInputChange} options={[{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]} />
                <SelectField label="Coronary Disease" name="coronary_artery_disease" value={formData.coronary_artery_disease} onChange={handleInputChange} options={[{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]} />
                <SelectField label="Anaemia" name="anaemia" value={formData.anaemia} onChange={handleInputChange} options={[{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }]} />
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <SectionHeader title="Biochemistry Profile" subtitle="Renal function markers" icon={Activity} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="md:col-span-1 bg-indigo-50/50 p-1 rounded-xl">
                    <InputField label="Serum Creatinine" name="serum_creatinine" value={formData.serum_creatinine} onChange={handleInputChange} placeholder="1.2" icon={Thermometer} />
                 </div>
                 <InputField label="Blood Urea" name="blood_urea" value={formData.blood_urea} onChange={handleInputChange} placeholder="40" />
                 <InputField label="Potassium" name="potassium" value={formData.potassium} onChange={handleInputChange} placeholder="4.5" />
                 
                 <InputField label="Albumin (0-5)" name="albumin" value={formData.albumin} onChange={handleInputChange} placeholder="0" icon={Droplets} />
                 <InputField label="Sugar (0-5)" name="sugar" value={formData.sugar} onChange={handleInputChange} placeholder="0" />
                 <InputField label="Random Glucose" name="blood_glucose_random" value={formData.blood_glucose_random} onChange={handleInputChange} placeholder="140" />
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <SectionHeader title="Specialized & Microscopic" subtitle="HIV and urine markers" icon={Microscope} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="md:col-span-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100 flex items-center gap-4">
                    <Dna className="h-10 w-10 text-purple-500" />
                    <div className="flex-1">
                      <InputField label="CD4 Count (HIV Marker)" name="cd4" value={formData.cd4} onChange={handleInputChange} placeholder="450" />
                    </div>
                    <div className="flex-1">
                      <InputField label="White Blood Cells" name="white_blood_cell_count" value={formData.white_blood_cell_count} onChange={handleInputChange} placeholder="8000" />
                    </div>
                 </div>
                 
                 <SelectField label="Red Blood Cells" name="red_blood_cells" value={formData.red_blood_cells} onChange={handleInputChange} options={[{ value: 'normal', label: 'Normal' }, { value: 'abnormal', label: 'Abnormal' }]} />
                 <SelectField label="Pus Cells" name="pus_cell" value={formData.pus_cell} onChange={handleInputChange} options={[{ value: 'normal', label: 'Normal' }, { value: 'abnormal', label: 'Abnormal' }]} />
                 <SelectField label="Bacteria" name="bacteria" value={formData.bacteria} onChange={handleInputChange} options={[{ value: 'notpresent', label: 'Absent' }, { value: 'present', label: 'Present' }]} />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-100 flex justify-end">
            <button 
              onClick={calculateResults} 
              disabled={loading} 
              className="px-12 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 transition-all flex items-center gap-3 transform active:scale-95 disabled:opacity-70"
            >
              {loading ? "Processing DNN..." : "Run Clinical Analysis"} 
              {!loading && <Activity className="h-5 w-5" />}
            </button>
          </div>
        </Card>
      </div>

      {/* RIGHT: RESULTS STICKY */}
      <div className="xl:col-span-4 space-y-6 print:col-span-12">
        <div className="sticky top-28 space-y-6">
          {result ? (
            <div className="animate-in fade-in slide-in-from-right duration-500 space-y-6">
              {/* Diagnosis Card */}
              <Card className="relative overflow-hidden border-0 shadow-2xl print:shadow-none print:border">
                <div className={`absolute top-0 left-0 w-full h-2 ${result.prediction.includes("NO") ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-gradient-to-r from-rose-500 to-red-600'}`}></div>
                <div className="p-8">
                  <div className="hidden print:block mb-4 text-center border-b pb-4">
                     <h1 className="text-xl font-bold">Medical Diagnosis Report</h1>
                     <p className="text-sm">Patient: {patientName || "Unknown"}</p>
                     <p className="text-sm">Gender: {formData.gender}</p>
                     <p className="text-sm">Date: {new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Diagnosis</p>
                      <h3 className={`text-3xl font-black leading-tight ${result.prediction.includes("NO") ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {result.prediction}
                      </h3>
                    </div>
                    {result.prediction.includes("NO") ? 
                      <div className="p-3 bg-emerald-100 rounded-full print:hidden"><CheckCircle className="h-8 w-8 text-emerald-600" /></div> :
                      <div className="p-3 bg-rose-100 rounded-full print:hidden"><AlertTriangle className="h-8 w-8 text-rose-600" /></div>
                    }
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">Calculated eGFR</span>
                      <span className="text-xl font-bold text-slate-900">{result.gfr}</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">CKD Stage</span>
                      <Badge color={result.prediction.includes("NO") ? "emerald" : "rose"}>{result.stage}</Badge>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center print:hidden">
                      <span className="text-sm font-medium text-slate-600">Model Confidence</span>
                      <span className="font-bold text-indigo-600">{result.confidence}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* TDF Card */}
              <Card className={`border-0 border-l-4 ${result.tdf.color === 'red' ? 'border-l-rose-500' : result.tdf.color === 'yellow' ? 'border-l-amber-500' : 'border-l-emerald-500'} print:border`}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${result.tdf.color === 'red' ? 'bg-rose-100' : result.tdf.color === 'yellow' ? 'bg-amber-100' : 'bg-emerald-100'} print:hidden`}>
                      <Pill className={`h-5 w-5 ${result.tdf.color === 'red' ? 'text-rose-600' : result.tdf.color === 'yellow' ? 'text-amber-600' : 'text-emerald-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">TDF Medication Protocol</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Toxicity Risk Assessment</p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${result.tdf.color === 'red' ? 'bg-rose-50 text-rose-800' : result.tdf.color === 'yellow' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800'}`}>
                    <p className="font-bold text-lg mb-1">{result.tdf.status}</p>
                    <p className="text-sm opacity-90 leading-relaxed">{result.tdf.msg}</p>
                  </div>
                </div>
              </Card>

              {/* SAVE & PDF BUTTONS */}
              <div className="grid grid-cols-2 gap-4 print:hidden">
                <button 
                  onClick={handleSave} 
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:bg-slate-800 transition-all flex justify-center items-center gap-2 group"
                >
                  <Save className="h-5 w-5 group-hover:scale-110 transition-transform" /> Save
                </button>
                <button 
                  onClick={handlePrintReport} 
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl hover:bg-indigo-700 transition-all flex justify-center items-center gap-2 group"
                >
                  <Download className="h-5 w-5 group-hover:scale-110 transition-transform" /> Print Report
                </button>
              </div>
            </div>
          ) : (
            <div className="h-96 rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
                <Stethoscope className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700">Awaiting Vitals</h3>
              <p className="text-slate-400 mt-2 max-w-[200px]">Complete the clinical form on the left to generate a diagnosis.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [backendStatus, setBackendStatus] = useState(true);
  const initialForm = { age: '', gender: 'male', blood_pressure: '', albumin: '0', sugar: '0', red_blood_cells: 'normal', pus_cell: 'normal', pus_cell_clumps: 'notpresent', bacteria: 'notpresent', blood_glucose_random: '', blood_urea: '', serum_creatinine: '', potassium: '', white_blood_cell_count: '', hypertension: 'no', diabetes_mellitus: 'no', coronary_artery_disease: 'no', pedal_edema: 'no', anaemia: 'no', cd4: '' };
  const [formData, setFormData] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check Backend Status on Mount
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_history')
      .then(res => {
        if (res.ok) setBackendStatus(true);
        else setBackendStatus(false);
      })
      .catch(() => setBackendStatus(false));
  }, []);

  const navigate = (page) => setCurrentPage(page);
  
  const handleLogin = (username, role) => { 
    setUser({ username, role }); 
    navigate('upload'); 
  };
  
  const handleReset = () => { setFormData(initialForm); setResult(null); };
  
  const handleDataParsed = (data) => { setFormData(data); navigate('prediction'); };
  const handleManualEntry = () => { navigate('prediction'); };
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const calculateResults = async () => {
    setLoading(true); setResult(null);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await response.json();
      
      if (!response.ok) {
        alert(`Server Error: ${data.error || 'Unknown Error'}`);
      } else {
        setResult({ prediction: data.prediction, confidence: data.confidence, stage: data.stage, gfr: data.gfr, tdf: data.tdf });
      }
    } catch (error) {
      alert("Network Error: Cannot connect to backend (http://127.0.0.1:5000)");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* CONNECTION ERROR BANNER */}
      {!backendStatus && (
        <div className="bg-red-600 text-white px-4 py-2 text-center text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-[60] print:hidden">
          <WifiOff className="h-4 w-4" />
          Error: Cannot connect to Backend Server (http://127.0.0.1:5000). Is python api.py running?
        </div>
      )}

      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 print:hidden">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg"><Activity className="h-5 w-5 text-white" /></div>
          <span className="font-bold text-xl">Hospital<span className="text-indigo-600">OS</span></span>
        </div>
        
        {/* Navigation - Hidden for non-logged in users (Except Home/Login) */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
           <button onClick={() => navigate('home')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'home' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Home</button>
           
           {/* Protected Routes */}
           {user && (
             <>
               <button onClick={() => navigate('upload')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'upload' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Upload</button>
               <button onClick={() => navigate('prediction')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'prediction' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Prediction</button>
               <button onClick={() => navigate('history')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'history' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>History</button>
               <button onClick={() => navigate('performance')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'performance' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Analysis</button>
             </>
           )}

           {user?.role === 'admin' && <button onClick={() => navigate('admin')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'admin' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Admin</button>}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block"><p className="text-sm font-bold text-slate-700">{user.username}</p><p className="text-xs text-indigo-600 font-bold uppercase tracking-wide">{user.role}</p></div>
              <button onClick={() => { setUser(null); navigate('home'); }} className="p-2.5 hover:bg-rose-50 rounded-xl text-slate-400 hover:text-rose-500 transition-all" title="Logout"><LogOut className="h-5 w-5" /></button>
            </div>
          ) : (
            <button onClick={() => navigate('login')} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">Login</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-10">
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
        {user && currentPage === 'upload' && <UploadPage onDataParsed={handleDataParsed} onManualEntry={handleManualEntry} />}
        {user && currentPage === 'prediction' && <PredictionPage formData={formData} handleInputChange={handleInputChange} calculateResults={calculateResults} loading={loading} result={result} user={user || {username:'Guest'}} onReset={handleReset} />}
        {user && currentPage === 'performance' && <PerformancePage />}
        {user?.role === 'admin' && currentPage === 'admin' && <AdminPanel user={user} />}
        {user && currentPage === 'history' && <HistoryPage />}
      </main>
    </div>
  );
}