
import React, { useState } from 'react';
import { generateMenuSuggestion } from '../services/geminiService.ts';

const QuotationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'Corporate Meeting',
    guestCount: 20,
    preferences: ''
  });
  const [loading, setLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<any>(null);

  const handleSuggest = async () => {
    setLoading(true);
    const suggestion = await generateMenuSuggestion(formData.eventType, formData.guestCount, formData.preferences);
    setAiSuggestion(suggestion);
    setLoading(false);
    setStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white rounded-[4rem] p-8 md:p-16 custom-shadow border border-blue-50 relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

        {step === 1 ? (
          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-4">
              <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20">AI Assistant</span>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950">Plan Your <span className="text-blue-600">Celebration</span></h1>
              <p className="text-slate-500 font-medium">Curate a menu that perfectly fits your event's theme and guest needs.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 ml-2">What's the occasion?</label>
                <select 
                  className="w-full px-6 py-4 rounded-[1.5rem] border-none bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium transition-all"
                  value={formData.eventType}
                  onChange={e => setFormData({...formData, eventType: e.target.value})}
                >
                  <option>Corporate Meeting</option>
                  <option>Birthday Party</option>
                  <option>Wedding Ceremony</option>
                  <option>High Tea Gathering</option>
                  <option>Traditional Function</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 ml-2">Number of Guests</label>
                <input 
                  type="number" 
                  className="w-full px-6 py-4 rounded-[1.5rem] border-none bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none font-medium transition-all"
                  value={formData.guestCount}
                  onChange={e => setFormData({...formData, guestCount: parseInt(e.target.value)})}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 ml-2">Any special requests? (Spicy, Low Sugar, etc.)</label>
              <textarea 
                placeholder="Tell us what you crave..."
                className="w-full px-6 py-4 rounded-[2rem] border-none bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none min-h-[150px] font-medium transition-all"
                value={formData.preferences}
                onChange={e => setFormData({...formData, preferences: e.target.value})}
              />
            </div>

            <button 
              onClick={handleSuggest}
              disabled={loading}
              className="w-full bg-blue-950 text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-blue-900 transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Crafting Your Menu...
                </>
              ) : (
                'Generate Personalized Suggestion'
              )}
            </button>
          </div>
        ) : (
          <div className="relative z-10 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => setStep(1)}
                className="text-blue-600 font-bold flex items-center gap-2 hover:opacity-70 px-4 py-2 rounded-full bg-blue-50"
              >
                ← Edit Choices
              </button>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Result</span>
            </div>

            {aiSuggestion && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Your Curated <span className="text-blue-600">Menu</span></h2>
                  <p className="text-slate-500 italic text-lg leading-relaxed">"{aiSuggestion.introduction}"</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {aiSuggestion.menuItems.map((item: any, i: number) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-xl group">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 block">{item.category}</span>
                      <h4 className="font-bold text-blue-950 text-xl mb-3 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-600/5 p-8 rounded-[2.5rem] border border-blue-600/10 text-center">
                  <p className="text-blue-900 font-bold leading-relaxed">
                    {aiSuggestion.closingNote}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button 
                    onClick={() => alert('Quotation request sent!')}
                    className="flex-1 bg-blue-950 text-white py-5 rounded-[2rem] font-bold shadow-2xl hover:bg-blue-900 transition-all active:scale-95"
                  >
                    Request Official Quote
                  </button>
                  <button 
                    onClick={() => window.print()}
                    className="flex-1 bg-white text-slate-600 border border-slate-200 py-5 rounded-[2rem] font-bold hover:bg-slate-50 transition-all"
                  >
                    Download as PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotationWizard;
