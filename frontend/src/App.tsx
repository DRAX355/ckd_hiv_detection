import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, AlertTriangle, CheckCircle, ChevronRight, 
  Pill, Upload, FileText, BarChart2, Target, TrendingUp, 
  User, Stethoscope, LogOut, HeartPulse, Microscope,
  Dna, Thermometer, Droplets, ShieldCheck, ArrowRight,
  Lock, UserPlus, Database, Search, Save, WifiOff
} from 'lucide-react';

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

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="group relative">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-indigo-600 transition-colors">
      {label}
    </label>
    <input 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 shadow-sm" 
      placeholder={placeholder} 
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="group relative">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 group-focus-within:text-indigo-600 transition-colors">
      {label}
    </label>
    <div className="relative">
      <select 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer shadow-sm"
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
        
        <button 
          onClick={() => onNavigate('performance')} 
          className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-3"
        >
          <BarChart2 className="h-5 w-5 text-indigo-600" /> View Performance
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
        setNewUser({ username: '', password: '' });
      } else {
        setMsg({ text: data.error, type: 'error' });
      }
    } catch (err) {
      setMsg({ text: 'Failed to connect to server', type: 'error' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Admin Console</h2>
        <p className="text-slate-500 mt-2">Manage authorized personnel and system access.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
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
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <ShieldCheck className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Security Status</h3>
              <p className="text-slate-400 text-sm">System integrity check</p>
            </div>
          </div>
          
          <div className="space-y-6 text-sm">
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="text-slate-300">Active Session</span>
              <span className="font-bold">{user.username}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="text-slate-300">Access Level</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase">{user.role}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="text-slate-300">Encryption</span>
              <span className="text-emerald-400 font-bold">SHA-256</span>
            </div>
            
            <div className="pt-4 text-xs text-slate-500 leading-relaxed">
              Note: Only Administrators can create new user accounts. All passwords are securely hashed before storage in the local database.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const HistoryPage = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_history')
      .then(res => res.json())
      .then(data => { setRecords(data); setLoading(false); })
      .catch(err => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Patient Database</h2>
          <p className="text-slate-500 mt-2">Archives of all diagnoses generated by the system.</p>
        </div>
        <div className="relative">
          <input type="text" placeholder="Search records..." className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-64 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
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
              <th className="px-6 py-4">Doctor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {loading ? (
              <tr><td colSpan="7" className="px-6 py-8 text-center text-slate-400">Loading records...</td></tr>
            ) : records.length === 0 ? (
              <tr><td colSpan="7" className="px-6 py-8 text-center text-slate-400">No records found.</td></tr>
            ) : (
              records.map((r, i) => (
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
                  <td className="px-6 py-4 text-slate-400 text-xs uppercase">{r.created_by}</td>
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

const PerformancePage = () => (
  <div className="max-w-6xl mx-auto space-y-12 animate-in slide-in-from-right duration-500">
    <div className="text-center space-y-4 mb-16">
      <Badge color="indigo">IEEE Base Paper Benchmarks</Badge>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Model Performance</h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comparative analysis of our proposed Deep Neural Network (DNN) against standard machine learning classifiers.</p>
    </div>

    {/* Metric Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {[
         { label: 'Accuracy', val: '99.0%', sub: '+2% vs KNN', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
         { label: 'Precision', val: '99.0%', sub: 'Best in Class', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
         { label: 'Recall', val: '98.0%', sub: 'High Sensitivity', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' }
       ].map((stat, i) => (
         <Card key={i} className="p-8">
           <div className="flex justify-between items-start mb-6">
             <div className={`p-4 rounded-2xl ${stat.bg}`}>
               <stat.icon className={`h-8 w-8 ${stat.color}`} />
             </div>
             {i === 0 && <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">Top Performer</span>}
           </div>
           <div>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
             <p className="text-5xl font-black text-slate-900 mb-2">{stat.val}</p>
             <p className="text-sm font-medium text-slate-500">{stat.sub}</p>
           </div>
         </Card>
       ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Table */}
      <Card className="lg:col-span-2 p-8">
        <h3 className="font-bold text-xl text-slate-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg"><BarChart2 className="h-5 w-5 text-indigo-600"/></div>
          Classifier Comparison Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 pl-4 font-bold text-xs text-slate-400 uppercase tracking-wider">Algorithm</th>
                <th className="pb-4 font-bold text-xs text-slate-400 uppercase tracking-wider">Accuracy</th>
                <th className="pb-4 font-bold text-xs text-slate-400 uppercase tracking-wider">Precision</th>
                <th className="pb-4 font-bold text-xs text-slate-400 uppercase tracking-wider">Recall</th>
                <th className="pb-4 font-bold text-xs text-slate-400 uppercase tracking-wider">Visual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'DNN (Proposed)', acc: 99, pre: 99, rec: 98, highlight: true },
                { name: 'XG Boost', acc: 97, pre: 95, rec: 96 },
                { name: 'KNN', acc: 97, pre: 95, rec: 96 },
                { name: 'Random Forest', acc: 95, pre: 95, rec: 94 },
                { name: 'SVM', acc: 93, pre: 91, rec: 92 },
              ].map((row) => (
                <tr key={row.name} className={`group transition-colors ${row.highlight ? 'bg-indigo-50/60' : 'hover:bg-slate-50'}`}>
                  <td className={`py-5 pl-4 font-bold ${row.highlight ? 'text-indigo-700' : 'text-slate-700'}`}>{row.name}</td>
                  <td className="py-5 text-slate-600 font-medium tabular-nums">{row.acc}%</td>
                  <td className="py-5 text-slate-600 font-medium tabular-nums">{row.pre}%</td>
                  <td className="py-5 text-slate-600 font-medium tabular-nums">{row.rec}%</td>
                  <td className="py-5 w-32 pr-4">
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${row.highlight ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30' : 'bg-slate-300 group-hover:bg-slate-400'}`} 
                        style={{ width: `${row.acc}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Dataset Info */}
      <Card className="p-8 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-lg"><Activity className="h-5 w-5 text-indigo-400"/></div>
            Dataset Stats
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Samples</p>
              <p className="text-4xl font-black">158</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Class Balance</p>
              <div className="flex h-4 w-full rounded-full overflow-hidden">
                <div className="w-[64%] bg-emerald-500" title="Non-CKD"></div>
                <div className="w-[36%] bg-indigo-500" title="CKD"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Non-CKD (64%)</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> CKD (36%)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 relative z-10">
          <p className="text-xs text-slate-500 leading-relaxed">
            *Data sourced from UCI Machine Learning Repository (Chronic Kidney Disease Dataset) + Simulated HIV Parameters.
          </p>
        </div>
      </Card>
    </div>
  </div>
);

const PredictionPage = ({ formData, handleInputChange, calculateResults, loading, result, user }) => {
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

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="xl:col-span-8 space-y-6">
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Clinical Parameters</h2>
              <p className="text-slate-500 text-sm mt-1">Review auto-filled data or enter vitals</p>
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              System Ready
            </div>
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
      <div className="xl:col-span-4 space-y-6">
        <div className="sticky top-28 space-y-6">
          {result ? (
            <div className="animate-in fade-in slide-in-from-right duration-500 space-y-6">
              {/* Diagnosis Card */}
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <div className={`absolute top-0 left-0 w-full h-2 ${result.prediction.includes("NO") ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-gradient-to-r from-rose-500 to-red-600'}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Diagnosis</p>
                      <h3 className={`text-3xl font-black leading-tight ${result.prediction.includes("NO") ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {result.prediction}
                      </h3>
                    </div>
                    {result.prediction.includes("NO") ? 
                      <div className="p-3 bg-emerald-100 rounded-full"><CheckCircle className="h-8 w-8 text-emerald-600" /></div> :
                      <div className="p-3 bg-rose-100 rounded-full"><AlertTriangle className="h-8 w-8 text-rose-600" /></div>
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
                    <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600">Model Confidence</span>
                      <span className="font-bold text-indigo-600">{result.confidence}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* TDF Card */}
              <Card className={`border-0 border-l-4 ${result.tdf.color === 'red' ? 'border-l-rose-500' : result.tdf.color === 'yellow' ? 'border-l-amber-500' : 'border-l-emerald-500'}`}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${result.tdf.color === 'red' ? 'bg-rose-100' : result.tdf.color === 'yellow' ? 'bg-amber-100' : 'bg-emerald-100'}`}>
                      <Pill className={`h-5 w-5 ${result.tdf.color === 'red' ? 'text-rose-600' : result.tdf.color === 'yellow' ? 'text-amber-600' : 'text-emerald-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">TDF Protocol</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Toxicity Analysis</p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${result.tdf.color === 'red' ? 'bg-rose-50 text-rose-800' : result.tdf.color === 'yellow' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800'}`}>
                    <p className="font-bold text-lg mb-1">{result.tdf.status}</p>
                    <p className="text-sm opacity-90 leading-relaxed">{result.tdf.msg}</p>
                  </div>
                </div>
              </Card>

              {/* SAVE BUTTON */}
              <button 
                onClick={handleSave} 
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:bg-slate-800 transition-all flex justify-center items-center gap-2 group"
              >
                <Save className="h-5 w-5 group-hover:scale-110 transition-transform" /> Save Record to History
              </button>
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
  const [formData, setFormData] = useState({ age: '', blood_pressure: '', albumin: '0', sugar: '0', red_blood_cells: 'normal', pus_cell: 'normal', pus_cell_clumps: 'notpresent', bacteria: 'notpresent', blood_glucose_random: '', blood_urea: '', serum_creatinine: '', potassium: '', white_blood_cell_count: '', hypertension: 'no', diabetes_mellitus: 'no', coronary_artery_disease: 'no', pedal_edema: 'no', anaemia: 'no', cd4: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check Backend Status on Mount
  useEffect(() => {
    // We check /get_history because the root / route might not exist in some versions of api.py
    fetch('http://127.0.0.1:5000/get_history')
      .then(res => {
        // If we get a response (even 404, though get_history should be 200), the server is reachable.
        // But strictly, we want 200.
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
  
  const handleDataParsed = (data) => { setFormData(data); navigate('prediction'); };
  const handleManualEntry = () => { navigate('prediction'); };
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const calculateResults = async () => {
    setLoading(true); setResult(null);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await response.json();
      
      if (!response.ok) {
        // <--- IMPROVED ERROR HANDLING
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
        <div className="bg-red-600 text-white px-4 py-2 text-center text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-[60]">
          <WifiOff className="h-4 w-4" />
          Error: Cannot connect to Backend Server (http://127.0.0.1:5000). Is python api.py running?
        </div>
      )}

      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg"><Activity className="h-5 w-5 text-white" /></div>
          <span className="font-bold text-xl">Hospital<span className="text-indigo-600">OS</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
           <button onClick={() => navigate('home')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'home' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Home</button>
           {user && <button onClick={() => navigate('upload')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'upload' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Upload</button>}
           {user && <button onClick={() => navigate('prediction')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'prediction' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Prediction</button>}
           {user && <button onClick={() => navigate('history')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'history' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>History</button>}
           {user?.role === 'admin' && <button onClick={() => navigate('admin')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'admin' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Admin</button>}
           <button onClick={() => navigate('performance')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${currentPage === 'performance' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-900/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'}`}>Analysis</button>
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
        {currentPage === 'upload' && <UploadPage onDataParsed={handleDataParsed} onManualEntry={handleManualEntry} />}
        {currentPage === 'prediction' && <PredictionPage formData={formData} handleInputChange={handleInputChange} calculateResults={calculateResults} loading={loading} result={result} user={user} />}
        {currentPage === 'performance' && <PerformancePage />}
        {currentPage === 'admin' && <AdminPanel user={user} />}
        {currentPage === 'history' && <HistoryPage />}
      </main>
    </div>
  );
}