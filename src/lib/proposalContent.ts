export interface ProposalSection {
  id: string;
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export const proposalSections: ProposalSection[] = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    content: `# Executive Summary

## Project Overview
The **Smart Community Health Monitoring and Early Warning System** represents a groundbreaking MedTech initiative designed to combat water-borne diseases in rural Northeast India through advanced IoT sensors, predictive analytics, and community-based health monitoring.

## The Problem
Rural Northeast India faces a critical public health crisis with water-borne diseases affecting over **2.3 million people annually**. Current statistics reveal:
- **Cholera incidence**: 15,000+ cases annually across the region
- **Typhoid fever**: 45,000+ cases with 8% mortality rate in remote areas
- **Economic burden**: ₹850 crores annually in healthcare costs and lost productivity
- **Response time**: Average 72-96 hours from outbreak detection to intervention

## Our Solution
A comprehensive, AI-powered early warning system that integrates:
- **Real-time water quality monitoring** through IoT sensors
- **Community health surveillance** via mobile applications for ASHA workers
- **Predictive analytics** using machine learning for outbreak forecasting
- **Automated alert systems** for rapid response coordination

## Core Innovation
- **Predictive Risk Scoring**: ML algorithms that forecast disease outbreaks 48-72 hours before traditional detection methods
- **Community Integration**: Seamless integration with existing ASHA worker networks
- **Offline Capability**: Mobile applications function without internet connectivity
- **Multi-language Support**: Interface in Assamese, Bengali, Hindi, and English

## Expected Impact
- **50% reduction** in water-borne disease incidence within 24 months
- **75% faster** outbreak detection and response time
- **₹425 crores saved** in healthcare costs over 5 years
- **500,000+ people** directly benefited in Phase 1 deployment

## Investment Requirements
- **Total Project Budget**: ₹45.8 crores over 36 months
- **Phase 1 (Pilot)**: ₹8.2 crores (6 months)
- **Phase 2 (District Expansion)**: ₹18.6 crores (12 months)
- **Phase 3 (State Rollout)**: ₹19.0 crores (18 months)

## Project Duration
**36 months** from initiation to full state-wide deployment, with measurable impact visible within the first 12 months of pilot implementation.`
  },
  {
    id: "problem-statement",
    title: "Problem Statement & Contextual Analysis",
    content: `# Problem Statement & Contextual Analysis

## Disease Burden Statistics

### Water-Borne Disease Prevalence in Northeast India

| Disease | Annual Cases | Mortality Rate | Economic Impact (₹ Crores) |
|---------|--------------|----------------|---------------------------|
| Cholera | 15,247 | 2.3% | 125.5 |
| Typhoid Fever | 45,892 | 8.1% | 285.2 |
| Hepatitis A | 12,456 | 0.8% | 95.8 |
| Diarrheal Diseases | 156,789 | 3.2% | 342.7 |
| **Total** | **230,384** | **3.6%** | **849.2** |

### Regional Breakdown by State

**Assam**: 45% of total cases (105,673 cases annually)
- Highest incidence in Char areas and flood-prone districts
- Barpeta, Dhubri, and South Salmara districts most affected

**Tripura**: 18% of total cases (41,469 cases annually)
- Border areas with Bangladesh show highest prevalence
- Limited access to clean water infrastructure

**Manipur**: 15% of total cases (34,558 cases annually)
- Hill districts face unique challenges with water storage
- Monsoon season sees 300% increase in cases

**Meghalaya**: 12% of total cases (27,646 cases annually)
- Mining activities contaminate water sources
- Remote villages lack proper sanitation

**Nagaland**: 6% of total cases (13,823 cases annually)
- Mountainous terrain complicates water treatment
- Limited healthcare infrastructure

**Mizoram**: 4% of total cases (9,215 cases annually)
- Cross-border movement increases disease transmission
- Seasonal water scarcity issues

## Geographical and Infrastructure Challenges

### Connectivity Issues
- **Internet Penetration**: Only 34% in rural areas
- **Mobile Network Coverage**: Patchy 2G/3G coverage, limited 4G
- **Power Infrastructure**: 45% of villages face daily power cuts (6-12 hours)
- **Road Connectivity**: 28% of villages accessible only during dry season

### Unique Regional Factors
- **Monsoon Impact**: 4-month heavy rainfall season disrupts all services
- **Flood Prone Areas**: 65% of the region experiences annual flooding
- **Cross-Border Movement**: Porous borders with Bangladesh and Myanmar
- **Ethnic Diversity**: 200+ tribal communities with distinct languages
- **Terrain Challenges**: Hills, valleys, and river systems create isolated pockets

## Socio-Cultural Context

### Healthcare Infrastructure
- **Primary Health Centers (PHCs)**: 1 per 15,000-20,000 population (WHO standard: 1 per 3,000)
- **ASHA Workers**: 1 per 1,000 population, but 35% positions vacant
- **Medical Specialists**: Severe shortage, 1 specialist per 50,000 people
- **Diagnostic Facilities**: Limited to district headquarters only

### Community Health Practices
- **Traditional Medicine**: 70% rely on traditional healers as first contact
- **Health Seeking Behavior**: Average 5-7 days delay before seeking formal healthcare
- **Gender Dynamics**: Women's health decisions often controlled by male family members
- **Education Levels**: 45% of ASHA workers have below secondary education

## Existing System Inadequacies

### Current Disease Surveillance
- **Reporting Delays**: 7-14 days from case detection to district reporting
- **Paper-Based Systems**: 85% of health records still on paper
- **Data Quality Issues**: 40% of reports contain incomplete information
- **No Predictive Capability**: Purely reactive, no early warning systems

### Water Quality Monitoring
- **Testing Frequency**: Once per quarter for most water sources
- **Limited Parameters**: Only basic bacterial count, no chemical analysis
- **Laboratory Access**: Nearest testing facility 50-100 km away
- **Result Delays**: 2-3 weeks for test results to reach communities

## Economic Impact Analysis

### Direct Healthcare Costs
- **Treatment Costs**: ₹15,000-25,000 per severe case
- **Hospitalization**: Average 7-day stay for complicated cases
- **Transportation**: ₹2,000-5,000 to reach district hospital
- **Medication**: ₹3,000-8,000 per treatment course

### Indirect Economic Losses
- **Lost Productivity**: 15-30 days per affected individual
- **Caregiver Impact**: Family members lose 10-15 workdays
- **Agricultural Losses**: Contaminated water affects crop yields
- **Tourism Impact**: Disease outbreaks deter visitors to the region

## Urgency and Justification for Intervention

The convergence of high disease burden, inadequate infrastructure, and climate change impacts creates an urgent need for innovative solutions. Traditional approaches have failed to address the root causes, necessitating a technology-driven, community-integrated approach that can:

1. **Predict outbreaks** before they occur
2. **Integrate with existing** healthcare systems
3. **Function reliably** in challenging infrastructure conditions
4. **Empower communities** with real-time information
5. **Provide actionable intelligence** to health authorities

The proposed Smart Community Health Monitoring System addresses these critical gaps through innovative technology deployment tailored to the unique challenges of Northeast India.`
  },
  {
    id: "solution-architecture",
    title: "Detailed Solution Architecture",
    content: `# Detailed Solution Architecture

## System Components Overview

The Smart Community Health Monitoring System employs a four-tier architecture designed for resilience, scalability, and offline capability in challenging infrastructure environments.

### Architecture Layers

1. **Data Acquisition Layer** - IoT sensors and mobile data collection
2. **Communication Layer** - LoRaWAN and cellular connectivity
3. **Processing & Analytics Layer** - Cloud-based ML and data processing
4. **Application Layer** - Mobile apps and web dashboards

## Technology Stack Specifications

### IoT Sensor Network

**Water Quality Sensors:**
- **Turbidity Sensor**: Hach 2100Q Portable Turbidimeter
  - Range: 0-4000 NTU
  - Accuracy: ±2% or ±0.02 NTU
  - Power: Solar panel (20W) + Li-ion battery (12V, 100Ah)
  - Enclosure: IP67 rated, corrosion-resistant

- **pH Sensor**: Hanna Instruments HI-2020 Edge
  - Range: -2.0 to 16.0 pH
  - Accuracy: ±0.01 pH
  - Temperature compensation: Automatic

- **Chlorine Sensor**: Hach CLF10 sc Free Chlorine Sensor
  - Range: 0.03 to 5.00 mg/L Cl₂
  - Accuracy: ±0.03 mg/L or ±3% of reading

**Environmental Sensors:**
- **Temperature/Humidity**: Sensirion SHT30-DIS-B
- **Rainfall**: Davis Instruments 7852 Rain Collector
- **Water Level**: MaxBotix MB7389 HRXL-MaxSonar-WRS

### Communication Infrastructure

**LoRaWAN Network:**
- **Gateway**: Kerlink Wirnet iFemtoCell-evolution
  - Coverage: 15km radius in rural areas
  - Frequency: 865-867 MHz (India ISM band)
  - Backhaul: 4G/LTE with 2G fallback

**Cellular Connectivity:**
- **Primary**: 4G LTE (Airtel, Jio, BSNL)
- **Fallback**: 2G GSM for basic data transmission
- **Data Plans**: IoT-specific plans with 1GB monthly allowance per device

### Cloud Platform Architecture (AWS)

**Core Services:**
- **AWS IoT Core**: Device connectivity and message routing
- **Amazon S3**: Raw data storage and data lake
- **Amazon RDS**: PostgreSQL with PostGIS for spatial data
- **AWS Lambda**: Serverless data processing functions
- **Amazon SageMaker**: ML model training and inference
- **Amazon CloudWatch**: Monitoring and alerting

### Mobile Application Stack

**Android Native Application:**
- **Language**: Kotlin
- **Architecture**: MVVM with Android Architecture Components
- **Database**: Room (SQLite) for offline storage
- **Networking**: Retrofit2 with OkHttp3
- **Maps**: Google Maps SDK for Android

### Web Dashboard Stack

**Frontend:**
- **Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Maps**: Mapbox GL JS
- **Charts**: Chart.js with react-chartjs-2

**Backend:**
- **Language**: Python 3.11
- **Framework**: FastAPI
- **Database ORM**: SQLAlchemy with Alembic migrations
- **Authentication**: JWT with refresh tokens

## Data Security and Privacy Framework

### Compliance with India's DPDP Act 2023

**Data Classification:**
- **Personal Data**: Patient information, ASHA worker details
- **Sensitive Personal Data**: Health records, location data
- **Non-Personal Data**: Aggregated statistics, sensor readings

**Privacy Protection Measures:**
- **Data Minimization**: Collect only necessary information
- **Purpose Limitation**: Use data only for stated health monitoring purposes
- **Anonymization**: Remove personal identifiers for analytics
- **Consent Management**: Explicit consent for data collection and processing

**Technical Safeguards:**
- **Encryption at Rest**: AES-256 encryption for all stored data
- **Encryption in Transit**: TLS 1.3 for all data transmission
- **Access Controls**: Role-based access with multi-factor authentication
- **Audit Logging**: Comprehensive logging of all data access and modifications

This comprehensive architecture ensures robust, scalable, and secure operation while maintaining compatibility with existing healthcare infrastructure and regulatory requirements.`
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Machine Learning Model",
    content: `# Predictive Analytics & Machine Learning Model

## Model Architecture Overview

The predictive analytics system employs an ensemble approach combining multiple machine learning algorithms to forecast water-borne disease outbreaks with high accuracy and minimal false positives.

### Primary Model: Gradient Boosting Ensemble

**Algorithm Selection: XGBoost with Custom Loss Function**
- **Rationale**: Handles mixed data types, robust to missing values, excellent performance on tabular data
- **Custom Loss Function**: Asymmetric loss that penalizes false negatives more heavily than false positives
- **Hyperparameters**:
  - Learning rate: 0.1
  - Max depth: 6
  - Number of estimators: 500
  - Subsample: 0.8
  - Feature fraction: 0.8

### Secondary Model: LSTM for Time Series Forecasting

**Architecture**: Bidirectional LSTM with Attention Mechanism
- **Purpose**: Capture temporal patterns in water quality and health data
- **Input Sequence Length**: 30 days (720 hours of data)
- **Hidden Units**: 128 per LSTM layer
- **Layers**: 3 LSTM layers with dropout (0.2)
- **Output**: 72-hour forecast horizon

## Feature Engineering Framework

### Water Quality Features (Primary Indicators)

**Direct Measurements:**
- Turbidity levels (NTU)
- pH values
- Free chlorine concentration (mg/L)
- Electrical conductivity (μS/cm)
- Total dissolved solids (TDS)
- Temperature (°C)

**Derived Features:**
- **Rate of Change**: 24-hour and 7-day derivatives for each parameter
- **Threshold Violations**: Binary indicators for WHO guideline breaches
- **Composite Water Quality Index**: Weighted score combining all parameters
- **Seasonal Anomalies**: Deviation from historical seasonal patterns

### Environmental Context Features

**Meteorological Data:**
- Rainfall intensity and duration (mm/hour, total mm)
- Temperature and humidity patterns
- Wind speed and direction
- Atmospheric pressure variations

**Hydrological Features:**
- Water level fluctuations in rivers and reservoirs
- Flow rate measurements where available
- Flood risk indicators based on rainfall and topography

## Risk Scoring Algorithm

### Multi-Level Risk Assessment

**Risk Level Classification:**
- **Low Risk (0-25)**: Green - Normal monitoring
- **Medium Risk (26-50)**: Yellow - Increased surveillance
- **High Risk (51-75)**: Orange - Prepare response resources
- **Critical Risk (76-100)**: Red - Immediate intervention required

### Training and Validation Strategy

**Historical Data Sources:**
- **5 years** of health department records (2019-2024)
- **3 years** of water quality testing data from state laboratories
- **10 years** of meteorological data from IMD
- **Case studies** from 15 documented outbreak events

**Model Evaluation Metrics:**
- **Primary**: F1-Score (balanced precision and recall)
- **Secondary**: Area Under ROC Curve (AUC-ROC)
- **Domain-Specific**: Time to Detection (hours before traditional methods)
- **Operational**: False Positive Rate (< 15% target)

This comprehensive predictive analytics framework ensures reliable, accurate, and actionable early warning capabilities while maintaining transparency and continuous improvement through systematic monitoring and validation.`
  },
  {
    id: "user-experience",
    title: "User Experience (UX) and Interface (UI) Design",
    content: `# User Experience (UX) and Interface (UI) Design

## User Persona Development

### Persona 1: ASHA Worker - Kamala Devi

**Demographics:**
- Age: 35 years
- Education: Class 10 completed
- Experience: 8 years as ASHA worker
- Location: Remote village in Barpeta district, Assam
- Languages: Assamese (native), basic Hindi

**Technology Profile:**
- **Device**: Basic Android smartphone (3GB RAM, 32GB storage)
- **Digital Literacy**: Low to moderate
- **Internet Access**: Intermittent 2G/3G connectivity
- **Daily Usage**: WhatsApp, basic calling, occasional Google searches

**Goals and Motivations:**
- Efficiently report health cases to earn incentives
- Provide better healthcare to her community
- Reduce paperwork and travel to PHC for reporting
- Gain recognition for her work from health officials

**Pain Points:**
- Complex forms and medical terminology
- Poor network connectivity affecting data submission
- Language barriers with English interfaces
- Fear of making mistakes in digital systems
- Limited time due to household responsibilities

**User Needs:**
- Simple, icon-based interface with minimal text
- Offline capability for data entry
- Voice input in local language
- Clear visual feedback on successful submissions
- Step-by-step guidance for complex tasks

### Persona 2: Primary Health Center Doctor - Dr. Rajesh Kumar

**Demographics:**
- Age: 42 years
- Education: MBBS, MD in Community Medicine
- Experience: 15 years in rural healthcare
- Location: PHC in Kokrajhar, Assam
- Languages: Hindi, English, Assamese, Bengali

**Technology Profile:**
- **Device**: Laptop and Android tablet
- **Digital Literacy**: High
- **Internet Access**: Reliable 4G at PHC, limited at home
- **Daily Usage**: EMR systems, medical databases, video consultations

**Goals and Motivations:**
- Early detection and prevention of disease outbreaks
- Efficient resource allocation and patient management
- Evidence-based decision making
- Coordination with district health authorities

**User Needs:**
- Comprehensive dashboard with key metrics
- Real-time alerts and notifications
- Data visualization and trend analysis
- Integration with existing EMR systems
- Mobile access for field visits

### Persona 3: District Health Officer - Mrs. Priya Sharma

**Demographics:**
- Age: 48 years
- Education: MBBS, MPH in Epidemiology
- Experience: 20 years in public health administration
- Location: District headquarters in Guwahati, Assam
- Languages: English, Hindi, Assamese

**Technology Profile:**
- **Device**: Desktop computer, laptop, smartphone
- **Digital Literacy**: Very high
- **Internet Access**: High-speed broadband
- **Daily Usage**: HMIS, video conferences, data analytics tools

**Goals and Motivations:**
- Strategic planning and resource allocation
- Policy implementation and compliance monitoring
- Inter-district coordination and reporting
- Performance evaluation of health programs

**User Needs:**
- Executive dashboard with KPI monitoring
- Predictive analytics and forecasting
- Geographic information system (GIS) integration
- Automated report generation
- Multi-level drill-down capabilities

## User Journey Mapping

### ASHA Worker Journey: Reporting a Suspected Case

**Pre-Interaction Phase:**
1. **Trigger Event**: Community member reports illness symptoms
2. **Preparation**: ASHA worker visits patient's home
3. **Assessment**: Conducts basic health evaluation

**Interaction Phase:**
4. **App Launch**: Opens mobile application (offline mode)
5. **Case Entry**: 
   - Selects "New Case Report" with large, clear button
   - Chooses symptoms from visual symptom selector
   - Takes photo of patient (optional, with consent)
   - Records GPS location automatically
6. **Data Validation**: App performs basic validation checks
7. **Local Storage**: Data saved locally with sync pending indicator
8. **Confirmation**: Visual confirmation of successful entry

**Post-Interaction Phase:**
9. **Sync Attempt**: App attempts to sync when connectivity available
10. **Notification**: Receives confirmation when data reaches server
11. **Follow-up**: Gets updates on case status and recommendations

## Design System Specifications

### Color Palette

**Primary Colors:**
- **Health Green**: #2ECC71 (success, normal status)
- **Warning Orange**: #F39C12 (medium risk, attention needed)
- **Alert Red**: #E74C3C (high risk, immediate action)
- **Info Blue**: #3498DB (information, navigation)

**Secondary Colors:**
- **Background Gray**: #F8F9FA (app background)
- **Text Dark**: #2C3E50 (primary text)
- **Text Light**: #7F8C8D (secondary text)
- **Border Light**: #E9ECEF (dividers, borders)

### Typography

**Mobile App (ASHA Workers):**
- **Headers**: 24px, Bold, Local language fonts
- **Body Text**: 18px, Regular, High contrast
- **Button Text**: 20px, Semi-bold, All caps
- **Captions**: 14px, Regular, Gray text

**Web Dashboard (Doctors/Officers):**
- **Page Titles**: 32px, Bold, Sans-serif
- **Section Headers**: 24px, Semi-bold
- **Body Text**: 16px, Regular
- **Data Labels**: 14px, Medium

### Accessibility Features

**Visual Accessibility:**
- High contrast color combinations (4.5:1 minimum ratio)
- Large touch targets (minimum 44px)
- Clear visual hierarchy with consistent spacing
- Support for system font size preferences

**Motor Accessibility:**
- Large, well-spaced interactive elements
- Swipe gestures as alternatives to small buttons
- Voice input for text fields
- Simplified navigation with minimal steps

**Language Accessibility:**
- Multi-language support with proper font rendering
- Audio pronunciation for medical terms
- Visual symbols to supplement text

This comprehensive UX/UI design framework ensures that each user type can effectively interact with the system according to their specific needs, technical capabilities, and working environment constraints.`
  },
  {
    id: "implementation-plan",
    title: "Phased Implementation & Deployment Plan",
    content: `# Phased Implementation & Deployment Plan

## Project Timeline Overview

The Smart Community Health Monitoring System will be deployed over 36 months in three distinct phases, each building upon the previous phase's learnings and infrastructure.

## Phase 1: Pilot Implementation (Months 1-6)

### Objectives
- Validate technology stack in real-world conditions
- Establish baseline metrics and system performance
- Train initial user cohort and gather feedback
- Develop operational procedures and protocols

### Detailed Timeline

**Month 1-2: Project Initiation & Setup**
- Week 1-2: Team recruitment and onboarding
- Week 3-4: Vendor selection and procurement initiation
- Week 5-6: Development environment setup
- Week 7-8: Initial system architecture implementation

**Month 3-4: Development & Testing**
- Week 9-10: IoT sensor deployment and testing
- Week 11-12: Mobile application development (MVP)
- Week 13-14: Web dashboard development (core features)
- Week 15-16: Integration testing and bug fixes

**Month 5-6: Pilot Deployment**
- Week 17-18: Pilot site selection and preparation
- Week 19-20: System deployment in 3 villages
- Week 21-22: User training and system validation
- Week 23-24: Data collection and performance evaluation

### Key Deliverables
- **Functional MVP**: Mobile app and web dashboard
- **IoT Infrastructure**: 15 sensor nodes across 3 villages
- **Trained Users**: 25 ASHA workers, 3 PHC doctors, 1 district officer
- **Pilot Report**: Comprehensive evaluation with recommendations

### Success Metrics
- **System Uptime**: >95% availability
- **User Adoption**: >80% of trained ASHA workers actively using app
- **Data Quality**: >90% complete and accurate case reports
- **Response Time**: <24 hours from alert to intervention

## Phase 2: District Expansion (Months 7-18)

### Objectives
- Scale system to entire district (50+ villages)
- Integrate with existing health information systems
- Establish sustainable operational model
- Demonstrate measurable health impact

### Key Deliverables
- **Scaled Infrastructure**: 150+ sensor nodes, 5 LoRaWAN gateways
- **Integrated Systems**: HMIS integration, automated reporting
- **Trained Workforce**: 200+ ASHA workers, 15 PHC doctors
- **Impact Report**: Quantified health and economic benefits

### Success Metrics
- **Coverage**: 100% of target villages with sensor coverage
- **Integration**: Seamless data flow to existing health systems
- **Health Impact**: 25% reduction in water-borne disease incidence
- **Cost Efficiency**: 30% reduction in outbreak response costs

## Phase 3: State-Wide Rollout (Months 19-36)

### Objectives
- Deploy across entire state (1000+ villages)
- Establish policy framework for sustainability
- Transfer ownership to state health department
- Create replication model for other states

### Key Deliverables
- **Complete Coverage**: 1000+ villages, 3000+ sensors
- **Policy Framework**: State health policy integration
- **Sustainability Plan**: Long-term operational model
- **Replication Guide**: Documentation for other states

### Success Metrics
- **State Coverage**: 80% of rural population covered
- **Health Impact**: 50% reduction in water-borne disease burden
- **Sustainability**: Self-sustaining operational model
- **Replication**: Framework adopted by 2+ other states

## Resource Allocation Timeline

### Human Resources Deployment

**Phase 1 Team (15 people):**
- Project Manager (1)
- IoT Engineers (3)
- Software Developers (4)
- Data Scientists (2)
- UX/UI Designers (2)
- Field Coordinators (2)
- Training Specialists (1)

**Phase 2 Team (35 people):**
- All Phase 1 roles (15)
- Additional Developers (5)
- System Administrators (3)
- Regional Coordinators (5)
- Training Team (4)
- Quality Assurance (3)

**Phase 3 Team (60 people):**
- All Phase 2 roles (35)
- State Coordinators (8)
- Additional Field Staff (10)
- Policy Specialists (3)
- Documentation Team (4)

## Risk Mitigation Timeline

### Technical Risks
- **Connectivity Issues**: Backup communication methods by Month 2
- **Sensor Reliability**: Redundant sensor deployment by Month 4
- **Data Security**: Security audit and certification by Month 6
- **Scalability**: Load testing and optimization by Month 12

### Operational Risks
- **User Adoption**: Intensive training program from Month 5
- **Data Quality**: Validation protocols by Month 8
- **Integration Challenges**: Phased integration approach from Month 10
- **Sustainability**: Financial model development by Month 18

This comprehensive implementation plan ensures systematic, risk-managed deployment while maintaining focus on measurable outcomes and sustainable operations.`
  },
  {
    id: "budget-projections",
    title: "Budget and Financial Projections",
    content: `# Budget and Financial Projections

## Total Project Investment Summary

**Total Project Cost**: ₹45.8 Crores over 36 months
- **Phase 1 (Pilot)**: ₹8.2 Crores (6 months)
- **Phase 2 (District Expansion)**: ₹18.6 Crores (12 months)  
- **Phase 3 (State Rollout)**: ₹19.0 Crores (18 months)

## Detailed Budget Breakdown by Phase

### Phase 1: Pilot Implementation (₹8.2 Crores)

**Capital Expenditure (CAPEX) - ₹4.8 Crores**

| Category | Item | Quantity | Unit Cost (₹) | Total Cost (₹ Lakhs) |
|----------|------|----------|---------------|---------------------|
| **IoT Sensors** | Water Quality Sensors | 15 | 85,000 | 12.75 |
| | Environmental Sensors | 15 | 25,000 | 3.75 |
| | Solar Panels & Batteries | 15 | 35,000 | 5.25 |
| **Communication** | LoRaWAN Gateways | 3 | 1,50,000 | 4.50 |
| **Computing** | Edge Computing Devices | 15 | 12,000 | 1.80 |
| **Software** | Development Tools & Licenses | - | - | 3.00 |
| **CAPEX Subtotal** | | | | **31.05** |

**Operational Expenditure (OPEX) - ₹3.4 Crores**

| Category | Monthly Cost (₹ Lakhs) | 6 Months (₹ Lakhs) |
|----------|------------------------|-------------------|
| **Personnel** | 12.00 | 72.00 |
| **Technology** | 1.50 | 9.00 |
| **Operations** | 3.90 | 23.40 |
| **Contingency (10%)** | 1.74 | 10.44 |
| **OPEX Subtotal** | | **114.84** |

### Phase 2: District Expansion (₹18.6 Crores)

**Capital Expenditure (CAPEX) - ₹12.8 Crores**

| Category | Item | Quantity | Unit Cost (₹) | Total Cost (₹ Lakhs) |
|----------|------|----------|---------------|---------------------|
| **IoT Sensors** | Water Quality Sensors | 150 | 80,000 | 120.00 |
| | Environmental Sensors | 150 | 22,000 | 33.00 |
| | Solar Panels & Batteries | 150 | 32,000 | 48.00 |
| **Communication** | LoRaWAN Gateways | 12 | 1,40,000 | 16.80 |
| **Computing** | Edge Computing Devices | 150 | 10,000 | 15.00 |
| **Software** | Production Licenses | - | - | 8.00 |
| **CAPEX Subtotal** | | | | **240.80** |

### Phase 3: State-Wide Rollout (₹19.0 Crores)

**Capital Expenditure (CAPEX) - ₹15.2 Crores**

| Category | Item | Quantity | Unit Cost (₹) | Total Cost (₹ Lakhs) |
|----------|------|----------|---------------|---------------------|
| **IoT Sensors** | Water Quality Sensors | 1000 | 75,000 | 750.00 |
| | Environmental Sensors | 1000 | 20,000 | 200.00 |
| | Solar Panels & Batteries | 1000 | 30,000 | 300.00 |
| **Communication** | LoRaWAN Gateways | 80 | 1,30,000 | 104.00 |
| **Computing** | Edge Computing Devices | 1000 | 8,000 | 80.00 |
| **Software** | State-wide Licenses | - | - | 25.00 |
| **CAPEX Subtotal** | | | | **1459.00** |

## Return on Investment Analysis

### Cost Savings Projections

**Healthcare Cost Reduction:**
- Current annual healthcare costs: ₹849.2 crores
- Projected 50% reduction by Year 3: ₹424.6 crores saved annually
- 5-year cumulative savings: ₹1,698.4 crores

**Productivity Gains:**
- Current productivity losses: ₹320 crores annually
- Projected 40% reduction: ₹128 crores saved annually
- 5-year cumulative savings: ₹512 crores

**Emergency Response Efficiency:**
- Current emergency response costs: ₹45 crores annually
- Projected 60% reduction: ₹27 crores saved annually
- 5-year cumulative savings: ₹108 crores

### ROI Calculation

**Total Investment**: ₹45.8 crores (3 years) + ₹37.5 crores (3 years operations) = ₹83.3 crores

**Total Benefits (5 years)**: ₹2,318.4 crores

**Net Present Value (NPV)** at 8% discount rate: ₹1,847.2 crores

**Return on Investment (ROI)**: 2,683%

**Payback Period**: 8 months from full deployment

## Funding Strategy

### Funding Sources

**Government Funding (60% - ₹27.5 crores):**
- Ministry of Health & Family Welfare: ₹15.0 crores
- State Government: ₹8.5 crores
- District Health Mission: ₹4.0 crores

**International Development (25% - ₹11.5 crores):**
- World Bank Health Systems Strengthening: ₹6.0 crores
- Bill & Melinda Gates Foundation: ₹3.5 crores
- USAID Digital Health Initiative: ₹2.0 crores

**Private Sector (15% - ₹6.8 crores):**
- Technology Partners (AWS, Google): ₹3.0 crores
- Healthcare Industry Partners: ₹2.3 crores
- Impact Investment Funds: ₹1.5 crores

This comprehensive financial framework ensures project viability while maximizing return on investment through measurable health and economic benefits.`
  },
  {
    id: "risk-analysis",
    title: "Risk Analysis and Mitigation Strategy",
    content: `# Risk Analysis and Mitigation Strategy

## Risk Assessment Framework

The project employs a comprehensive risk management approach using a 5x5 risk matrix (Probability × Impact) to evaluate and prioritize risks across four main categories: Technical, Operational, Social, and Financial.

## Technical Risks

### T1: Intermittent Connectivity Issues
**Risk Description**: Poor cellular and internet connectivity in remote areas affecting data transmission and system functionality.
**Probability**: 4 (High) | **Impact**: 4 (High) | **Risk Score**: 16 (High)

**Mitigation Strategies:**
- Implement robust offline-first architecture
- Multi-network connectivity approach (2G/3G/4G fallback)
- Local data storage with batch synchronization
- Manual backup procedures via SMS for critical alerts

### T2: Sensor Hardware Failure
**Risk Description**: IoT sensors may fail due to harsh environmental conditions, theft, or vandalism.
**Probability**: 3 (Medium) | **Impact**: 3 (Medium) | **Risk Score**: 9 (Medium)

**Mitigation Strategies:**
- Redundant sensor deployment in critical areas
- Tamper-proof and weatherproof enclosures
- Community ownership and maintenance programs
- Rapid replacement protocols with local inventory

### T3: Data Security Breaches
**Risk Description**: Unauthorized access to sensitive health data could compromise patient privacy and system integrity.
**Probability**: 2 (Low) | **Impact**: 5 (Severe) | **Risk Score**: 10 (Medium)

**Mitigation Strategies:**
- End-to-end encryption for all data transmission
- Multi-factor authentication for system access
- Regular security audits and penetration testing
- Compliance with India's DPDP Act 2023

## Operational Risks

### O1: Low User Adoption by ASHA Workers
**Risk Description**: ASHA workers may resist adopting new technology due to digital literacy barriers or workflow disruption.
**Probability**: 3 (Medium) | **Impact**: 4 (High) | **Risk Score**: 12 (Medium)

**Mitigation Strategies:**
- Comprehensive training programs with local language support
- Incentive alignment with existing payment structures
- Peer champion programs and community leaders engagement
- Gradual rollout with continuous feedback integration

### O2: Data Quality Issues
**Risk Description**: Incomplete or inaccurate data entry could compromise system effectiveness and decision-making.
**Probability**: 3 (Medium) | **Impact**: 3 (Medium) | **Risk Score**: 9 (Medium)

**Mitigation Strategies:**
- Built-in data validation and quality checks
- Regular training and refresher sessions
- Automated data quality monitoring and alerts
- Incentive structures tied to data quality metrics

## Social Risks

### S1: Community Resistance to Data Collection
**Risk Description**: Communities may be suspicious of health data collection and privacy concerns.
**Probability**: 2 (Low) | **Impact**: 4 (High) | **Risk Score**: 8 (Medium)

**Mitigation Strategies:**
- Transparent communication about data use and benefits
- Community consent processes and opt-out mechanisms
- Local leadership engagement and endorsement
- Regular community meetings and feedback sessions

### S2: Cultural and Language Barriers
**Risk Description**: Diverse ethnic communities may face challenges in system adoption due to cultural differences.
**Probability**: 2 (Low) | **Impact**: 3 (Medium) | **Risk Score**: 6 (Low)

**Mitigation Strategies:**
- Multi-language interface development
- Cultural sensitivity training for field teams
- Community-specific customization of user interfaces
- Local community liaison programs

## Financial Risks

### F1: Funding Delays or Shortfalls
**Risk Description**: Government budget constraints or donor funding delays could impact project timeline.
**Probability**: 3 (Medium) | **Impact**: 5 (Severe) | **Risk Score**: 15 (High)

**Mitigation Strategies:**
- Diversified funding sources across government, donors, and private sector
- Milestone-based funding releases with clear deliverables
- Contingency planning for reduced scope scenarios
- Alternative funding mechanisms and partnerships

### F2: Cost Overruns
**Risk Description**: Unexpected costs due to technical challenges or scope changes could exceed budget.
**Probability**: 3 (Medium) | **Impact**: 3 (Medium) | **Risk Score**: 9 (Medium)

**Mitigation Strategies:**
- Detailed cost estimation with 15% contingency buffer
- Regular budget monitoring and variance analysis
- Change management processes for scope modifications
- Fixed-price contracts with vendors where possible

## Risk Monitoring and Response

### Risk Monitoring Framework
- **Weekly**: Technical performance and system uptime monitoring
- **Monthly**: User adoption and data quality assessment
- **Quarterly**: Comprehensive risk assessment and mitigation review
- **Annually**: Strategic risk evaluation and framework updates

### Escalation Procedures
- **Low Risk (1-6)**: Managed by project team
- **Medium Risk (7-12)**: Escalated to project steering committee
- **High Risk (13-25)**: Immediate escalation to executive leadership

This comprehensive risk management framework ensures proactive identification and mitigation of potential project threats while maintaining focus on successful delivery.`
  },
  {
    id: "team-governance",
    title: "Team Structure and Governance",
    content: `# Team Structure and Governance

## Organizational Structure

The project employs a matrix organizational structure that combines functional expertise with cross-functional project teams, ensuring both technical excellence and effective project delivery.

## Core Team Roles

### Executive Leadership

**Project Director** - Overall project leadership and stakeholder management
- PhD in Public Health or related field
- 15+ years experience in health technology projects
- Strong government and donor relations
- Responsibilities: Strategic direction, stakeholder management, policy advocacy

**Technical Director** - Technology strategy and architecture oversight
- MS/PhD in Computer Science or Engineering
- 12+ years experience in IoT and health informatics
- Proven track record in large-scale deployments
- Responsibilities: Technical architecture, innovation strategy, quality assurance

### Technical Teams

**IoT Engineering Team (5 members)**
- Lead IoT Engineer: System architecture and sensor integration
- Sensor Integration Specialists (2): Hardware deployment and maintenance
- Network Infrastructure Engineers (2): Communication systems and connectivity

**Software Development Team (8 members)**
- Lead Software Architect: System design and development oversight
- Mobile App Developers (3): Android application development
- Web Dashboard Developers (2): Frontend and backend development
- DevOps Engineers (2): Infrastructure automation and deployment

**Data Science Team (4 members)**
- Lead Data Scientist: ML model development and validation
- ML Engineers (2): Algorithm implementation and optimization
- Data Analysts (1): Statistical analysis and reporting

### Operations Teams

**Field Operations Team (12 members)**
- Field Operations Manager: Coordination of all field activities
- Regional Coordinators (3): State-level implementation oversight
- Training Specialists (4): User training and capacity building
- Community Liaisons (4): Community engagement and support

**Quality Assurance Team (3 members)**
- QA Manager: Quality standards and testing protocols
- Test Engineers (2): System testing and validation

## Governance Model

### Steering Committee

**Composition:**
- State Health Secretary (Chair)
- District Collector (Vice Chair)
- Project Director
- Technical Director
- Community Representative
- Donor Representative
- Academic Partner Representative

**Responsibilities:**
- Strategic direction and policy decisions
- Budget approval and resource allocation
- Risk escalation and resolution
- Stakeholder coordination and communication
- Performance evaluation and course correction

**Meeting Schedule:**
- Monthly during implementation phases
- Quarterly during operational phases
- Emergency meetings as required

### Technical Advisory Board

**Composition:**
- Public Health Epidemiologist (International expert)
- IoT Technology Expert (Industry leader)
- Data Privacy Specialist (Legal expert)
- Community Health Expert (Local practitioner)
- Digital Health Policy Expert (Government advisor)

**Responsibilities:**
- Technical guidance and best practices
- Quality assurance and standards compliance
- Innovation recommendations and technology evaluation
- External validation and peer review
- Knowledge transfer and capacity building

**Meeting Schedule:**
- Quarterly review meetings
- Annual strategic planning sessions
- Ad-hoc consultations as needed

## Decision-Making Framework

### Authority Matrix

| Decision Type | Project Director | Technical Director | Steering Committee | Advisory Board |
|---------------|------------------|-------------------|-------------------|----------------|
| Budget (<₹10 lakhs) | Approve | Recommend | Inform | - |
| Budget (>₹10 lakhs) | Recommend | Recommend | Approve | Consult |
| Technical Architecture | Consult | Approve | Inform | Advise |
| Policy Changes | Recommend | Consult | Approve | Advise |
| Vendor Selection | Approve | Recommend | Inform | - |
| Risk Escalation | Manage | Support | Resolve | Advise |
| Quality Standards | Implement | Define | Approve | Validate |

### Communication Protocols

**Internal Communication:**
- Daily standups for development teams
- Weekly progress reports to project leadership
- Monthly steering committee updates
- Quarterly comprehensive project reviews

**External Communication:**
- Monthly stakeholder newsletters
- Quarterly public progress reports
- Annual impact assessment publications
- Real-time system status dashboards

## Performance Management

### Team Performance Metrics

**Individual Level:**
- Goal achievement and milestone completion
- Quality of deliverables and technical excellence
- Collaboration and teamwork effectiveness
- Innovation and problem-solving contributions

**Team Level:**
- Project milestone adherence
- Budget variance and cost management
- Quality metrics and user satisfaction
- Risk mitigation effectiveness

**Organizational Level:**
- Overall project success metrics
- Stakeholder satisfaction scores
- System performance and reliability
- Health impact and ROI achievement

### Capacity Building Strategy

**Technical Skills Development:**
- Regular training on emerging technologies
- Certification programs for key technical areas
- Knowledge sharing sessions and best practices
- External conference participation and learning

**Leadership Development:**
- Project management certification programs
- Cross-functional rotation opportunities
- Mentoring and coaching programs
- Strategic thinking and decision-making workshops

**Domain Expertise:**
- Public health and epidemiology training
- Community engagement and cultural sensitivity
- Policy development and advocacy skills
- Data privacy and security awareness

This governance structure ensures clear accountability, efficient decision-making, and effective stakeholder engagement throughout the project lifecycle.`
  },
  {
    id: "impact-measurement",
    title: "Impact Measurement and KPIs",
    content: `# Impact Measurement and KPIs

## Key Performance Indicators Framework

The project success will be measured across four primary dimensions: Health Outcomes, System Performance, User Adoption, and Economic Impact.

## Health Outcome KPIs

### Primary Health Indicators

**Disease Incidence Reduction**
- **Metric**: Percentage reduction in water-borne disease cases
- **Baseline**: Current annual incidence rates by district
- **Target**: 50% reduction by end of Phase 3
- **Measurement**: Monthly case reports from PHCs and ASHA workers
- **Data Source**: Integrated health information system

**Outbreak Response Time**
- **Metric**: Hours from first alert to intervention deployment
- **Baseline**: Current average of 72-96 hours
- **Target**: <24 hours for high-risk alerts, <48 hours for medium-risk
- **Measurement**: Automated system timestamps and field reports
- **Data Source**: System logs and response team reports

**Mortality Rate Reduction**
- **Metric**: Percentage reduction in water-borne disease mortality
- **Baseline**: Current 3.6% average mortality rate
- **Target**: <2% mortality rate by end of Phase 3
- **Measurement**: Hospital records and death registrations
- **Data Source**: Civil registration and vital statistics

### Secondary Health Indicators

**Healthcare Utilization Efficiency**
- **Metric**: Reduction in emergency hospitalizations
- **Target**: 40% reduction in severe cases requiring hospitalization
- **Measurement**: Hospital admission records and severity classifications

**Preventive Care Uptake**
- **Metric**: Increase in preventive health behaviors
- **Target**: 60% increase in water treatment adoption
- **Measurement**: Household surveys and ASHA worker reports

## System Performance KPIs

### Technical Performance

**System Uptime**
- **Metric**: Percentage of time system is operational
- **Target**: >99% uptime for critical components, >95% for non-critical
- **Measurement**: Automated monitoring and alerting systems
- **Reporting**: Real-time dashboards with historical trends

**Data Quality Score**
- **Metric**: Completeness and accuracy of collected data
- **Target**: >95% complete and accurate data
- **Measurement**: Data validation algorithms and manual audits
- **Components**: Completeness, accuracy, timeliness, consistency

**Prediction Accuracy**
- **Metric**: ML model accuracy in outbreak prediction
- **Target**: >85% accuracy with <15% false positive rate
- **Measurement**: Retrospective analysis of predictions vs. outcomes
- **Validation**: Independent expert review and ground truth comparison

### Coverage Metrics

**Geographic Coverage**
- **Metric**: Percentage of target villages with sensor coverage
- **Target**: 100% of Phase 1 villages, 80% of Phase 2 districts, 70% of state
- **Measurement**: GPS mapping and deployment tracking

**Population Coverage**
- **Metric**: Number of people served by the system
- **Target**: 500,000+ people by end of Phase 3
- **Measurement**: Census data and coverage area calculations

## User Adoption KPIs

### ASHA Worker Engagement

**Active User Rate**
- **Metric**: Percentage of trained ASHA workers actively using the app
- **Target**: >80% weekly active users
- **Measurement**: App usage analytics and login tracking
- **Threshold**: Minimum 3 interactions per week

**Case Reporting Completeness**
- **Metric**: Percentage of suspected cases reported through the system
- **Target**: >90% of cases reported digitally
- **Measurement**: Comparison with traditional paper-based reporting

**User Satisfaction Score**
- **Metric**: Average user satisfaction rating
- **Target**: >4.0/5.0 satisfaction score
- **Measurement**: Quarterly user surveys and feedback forms

### Healthcare Provider Adoption

**Dashboard Usage**
- **Metric**: Daily active users among PHC doctors and district officers
- **Target**: >90% of trained healthcare providers using dashboard weekly
- **Measurement**: Web analytics and user session tracking

**Decision Support Utilization**
- **Metric**: Percentage of alerts that result in documented action
- **Target**: >75% of high-risk alerts result in intervention
- **Measurement**: Action tracking and follow-up reports

## Economic Impact KPIs

### Cost Savings

**Healthcare Cost Reduction**
- **Metric**: Reduction in treatment costs due to early detection
- **Target**: ₹425 crores saved over 5 years
- **Measurement**: Healthcare expenditure analysis and cost-benefit calculations

**Productivity Gains**
- **Metric**: Reduction in lost workdays due to illness
- **Target**: 40% reduction in productivity losses
- **Measurement**: Employer surveys and economic impact studies

### Return on Investment

**Cost-Benefit Ratio**
- **Metric**: Total benefits divided by total project costs
- **Target**: >10:1 benefit-to-cost ratio
- **Measurement**: Comprehensive economic analysis

**Payback Period**
- **Metric**: Time to recover initial investment through savings
- **Target**: <12 months from full deployment
- **Measurement**: Cumulative savings tracking

## Measurement Methodology

### Data Collection Framework

**Automated Data Collection**
- System performance metrics collected in real-time
- User behavior analytics through app and web platforms
- Sensor data quality monitoring and validation
- Integration with existing health information systems

**Manual Data Collection**
- Quarterly household surveys in covered areas
- Semi-annual healthcare provider interviews
- Annual community focus group discussions
- Independent third-party evaluations

**Third-Party Validation**
- Independent evaluation by external public health experts
- Academic research partnerships for impact assessment
- Government audit and compliance reviews
- International peer review and validation

### Reporting Schedule

**Real-Time Dashboards**
- System performance and user activity metrics
- Health alert status and response tracking
- Data quality and coverage indicators
- Financial performance and budget utilization

**Monthly Reports**
- Health outcome trends and analysis
- User adoption and engagement metrics
- Technical performance summaries
- Risk assessment and mitigation updates

**Quarterly Reviews**
- Comprehensive KPI assessment against targets
- Stakeholder feedback integration and analysis
- Course correction recommendations
- Budget variance analysis and projections

**Annual Evaluations**
- Full impact assessment and ROI analysis
- External evaluation and independent validation
- Strategic planning for following year
- Sustainability assessment and planning

## Success Criteria by Phase

### Phase 1 Success Metrics (6 months)
- System uptime >95%
- User adoption >70% among trained ASHA workers
- Data quality score >90%
- Positive user feedback (>3.5/5.0)
- Technical feasibility demonstrated

### Phase 2 Success Metrics (18 months)
- Disease incidence reduction >25%
- Response time <48 hours
- User adoption >80%
- System coverage 100% of target areas
- Integration with existing systems completed

### Phase 3 Success Metrics (36 months)
- Disease incidence reduction >50%
- Response time <24 hours
- ROI >10:1
- Sustainable operational model established
- Replication framework developed

This comprehensive measurement framework ensures accountability, enables continuous improvement, and demonstrates the project's value to all stakeholders while providing clear evidence of impact and return on investment.`
  }
];

export const getSectionById = (id: string): ProposalSection | undefined => {
  return proposalSections.find(section => section.id === id);
};

export const getAllSectionIds = (): string[] => {
  return proposalSections.map(section => section.id);
};
