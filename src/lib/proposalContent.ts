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

**International Development (25% - ₹11.5
